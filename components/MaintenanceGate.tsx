'use client';

import { useState, useEffect, ReactNode } from 'react';

const MAINTENANCE_PIN = '482669';

interface MaintenanceGateProps {
	children: ReactNode;
}

export default function MaintenanceGate({ children }: MaintenanceGateProps) {
	const isUnderConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true';
	const [pinInput, setPinInput] = useState('');
	const [isUnlocked, setIsUnlocked] = useState(false);
	const [pinError, setPinError] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (typeof window !== 'undefined') {
			const unlocked = localStorage.getItem('site_unlocked') === 'true';
			setIsUnlocked(unlocked);
		}
	}, []);

	const handlePinSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (pinInput === MAINTENANCE_PIN) {
			localStorage.setItem('site_unlocked', 'true');
			setIsUnlocked(true);
			setPinError(false);
		} else {
			setPinError(true);
			setPinInput('');
		}
	};

	// Don't render anything until mounted to avoid hydration mismatch
	if (!mounted) {
		return (
			<main className="min-h-screen bg-white">
				<section className="relative h-screen bg-white flex items-center justify-center">
					<div className="animate-pulse text-gray-400 font-mono text-sm">Loading...</div>
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
							<span className="italic">Under maintenance</span>
						</h1>
						<p className="font-mono text-sm text-gray-500 mb-8">This site is temporarily unavailable.</p>
						<form onSubmit={handlePinSubmit} className="flex flex-col items-center gap-4">
							<input
								type="password"
								value={pinInput}
								onChange={(e) => setPinInput(e.target.value)}
								placeholder="Enter PIN"
								className={`px-4 py-2 border ${pinError ? 'border-red-500' : 'border-gray-300'} rounded-md font-mono text-center text-lg tracking-widest w-40 focus:outline-none focus:border-black`}
								maxLength={6}
							/>
							{pinError && <p className="text-red-500 text-sm font-mono">Incorrect PIN</p>}
							<button
								type="submit"
								className="px-6 py-2 bg-black text-white font-mono text-sm uppercase tracking-wider rounded-md hover:bg-gray-800 transition-colors"
							>
								Enter
							</button>
						</form>
					</div>
				</section>
			</main>
		);
	}

	return <>{children}</>;
}
