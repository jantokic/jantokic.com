'use client';

import { useTranslations } from 'next-intl';
import { type ReactNode, useEffect, useState } from 'react';

const MAINTENANCE_PIN = process.env.NEXT_PUBLIC_MAINTENANCE_PIN || '';
const MAX_ATTEMPTS = 3;
const LOCKOUT_DURATION = 5 * 60 * 1000; // 5 minutes in ms

interface MaintenanceGateProps {
	children: ReactNode;
}

export default function MaintenanceGate({ children }: MaintenanceGateProps) {
	const t = useTranslations('maintenance');
	const isUnderConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true';
	const [pinInput, setPinInput] = useState('');
	const [isUnlocked, setIsUnlocked] = useState(false);
	const [pinError, setPinError] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [attempts, setAttempts] = useState(0);
	const [lockedUntil, setLockedUntil] = useState<number | null>(null);
	const [remainingTime, setRemainingTime] = useState(0);

	useEffect(() => {
		setMounted(true);
		if (typeof window !== 'undefined') {
			const unlocked = localStorage.getItem('site_unlocked') === 'true';
			setIsUnlocked(unlocked);

			// Check for existing lockout
			const storedLockout = localStorage.getItem('pin_lockout');
			if (storedLockout) {
				const lockoutTime = Number.parseInt(storedLockout, 10);
				if (Date.now() < lockoutTime) {
					setLockedUntil(lockoutTime);
				} else {
					localStorage.removeItem('pin_lockout');
					localStorage.removeItem('pin_attempts');
				}
			}

			// Restore attempt count
			const storedAttempts = localStorage.getItem('pin_attempts');
			if (storedAttempts) {
				setAttempts(Number.parseInt(storedAttempts, 10));
			}
		}
	}, []);

	// Countdown timer for lockout
	useEffect(() => {
		if (!lockedUntil) return;

		const interval = setInterval(() => {
			const remaining = Math.max(0, lockedUntil - Date.now());
			setRemainingTime(remaining);

			if (remaining === 0) {
				setLockedUntil(null);
				setAttempts(0);
				localStorage.removeItem('pin_lockout');
				localStorage.removeItem('pin_attempts');
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [lockedUntil]);

	const handlePinSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (lockedUntil && Date.now() < lockedUntil) {
			return; // Still locked out
		}

		if (pinInput === MAINTENANCE_PIN) {
			localStorage.setItem('site_unlocked', 'true');
			localStorage.removeItem('pin_attempts');
			localStorage.removeItem('pin_lockout');
			setIsUnlocked(true);
			setPinError(false);
			setAttempts(0);
		} else {
			const newAttempts = attempts + 1;
			setAttempts(newAttempts);
			localStorage.setItem('pin_attempts', newAttempts.toString());
			setPinError(true);
			setPinInput('');

			if (newAttempts >= MAX_ATTEMPTS) {
				const lockoutTime = Date.now() + LOCKOUT_DURATION;
				setLockedUntil(lockoutTime);
				localStorage.setItem('pin_lockout', lockoutTime.toString());
			}
		}
	};

	const formatTime = (ms: number) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = Math.floor((ms % 60000) / 1000);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	const isLockedOut = lockedUntil && Date.now() < lockedUntil;

	// Don't render anything until mounted to avoid hydration mismatch
	if (!mounted) {
		return (
			<main className="min-h-screen bg-white">
				<section className="relative h-screen bg-white flex items-center justify-center">
					<div className="animate-pulse text-gray-400 font-mono text-sm">{t('loading')}</div>
				</section>
			</main>
		);
	}

	// Show under construction page with PIN if enabled and not unlocked
	if (isUnderConstruction && !isUnlocked) {
		return (
			<main className="min-h-screen bg-white">
				<section className="relative h-screen bg-white flex items-center justify-center">
					<div className="text-center px-6">
						<h1 className="font-serif text-4xl md:text-7xl tracking-tight text-black mb-8">
							<span className="italic">{t('title')}</span>
						</h1>
						<p className="font-mono text-sm text-gray-500 mb-8">{t('description')}</p>
						{isLockedOut ? (
							<div className="flex flex-col items-center gap-4">
								<p className="text-red-500 text-sm font-mono">{t('tooManyAttempts')}</p>
								<p className="text-gray-500 text-sm font-mono">{t('retryIn', { time: formatTime(remainingTime) })}</p>
							</div>
						) : (
							<form onSubmit={handlePinSubmit} className="flex flex-col items-center gap-4">
								<input
									type="password"
									value={pinInput}
									onChange={(e) => setPinInput(e.target.value)}
									placeholder={t('pinPlaceholder')}
									className={`px-4 py-2 border ${pinError ? 'border-red-500' : 'border-gray-300'} rounded-md font-mono text-center text-lg tracking-widest w-40 focus:outline-none focus:border-black`}
									maxLength={6}
								/>
								{pinError && (
									<p className="text-red-500 text-sm font-mono">
										{t('incorrectPin', { remaining: MAX_ATTEMPTS - attempts })}
									</p>
								)}
								<button
									type="submit"
									className="px-6 py-2 bg-black text-white font-mono text-sm uppercase tracking-wider rounded-md hover:bg-gray-800 transition-colors"
								>
									{t('enter')}
								</button>
							</form>
						)}
					</div>
				</section>
			</main>
		);
	}

	return <>{children}</>;
}
