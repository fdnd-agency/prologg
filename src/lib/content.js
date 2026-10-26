// CODE VAN CLAUDE
// https://claude.ai/share/56d1388d-35c2-4c56-8a58-8d992f9bcea0

import { parse } from 'yaml';
import nlRaw from '../content/nl/content.md?raw';
import enRaw from '../content/en/content.md?raw';

// grab the text between the two --- lines and parse it as YAML
const frontmatter = (raw) => parse(raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);

export const content = {
    nl: frontmatter(nlRaw),
    en: frontmatter(enRaw)
};