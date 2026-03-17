import { projects } from '../content/projects';
import de from '../messages/de.json';
import en from '../messages/en.json';

const slugs = projects.map((p) => p.slug);
const enSlugs = Object.keys(en.projects.data);
const deSlugs = Object.keys(de.projects.data);

let errors = 0;

// Check every project has translations in both languages
for (const slug of slugs) {
	if (!enSlugs.includes(slug)) {
		console.error(`Missing EN translation: projects.data.${slug}`);
		errors++;
	}
	if (!deSlugs.includes(slug)) {
		console.error(`Missing DE translation: projects.data.${slug}`);
		errors++;
	}
}

// Check for orphaned translations
for (const slug of enSlugs) {
	if (!slugs.includes(slug)) {
		console.error(`Orphaned EN translation: projects.data.${slug} (no matching project)`);
		errors++;
	}
}
for (const slug of deSlugs) {
	if (!slugs.includes(slug)) {
		console.error(`Orphaned DE translation: projects.data.${slug} (no matching project)`);
		errors++;
	}
}

if (errors > 0) {
	console.error(`\n${errors} validation error(s) found.`);
	process.exit(1);
} else {
	console.log(`All ${slugs.length} projects have matching translations in EN and DE.`);
}
