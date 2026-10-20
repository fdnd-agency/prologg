import { marked } from 'marked';

const files = import.meta.glob('/src/content/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
});

export function getSection(filename) {
    const path = `/src/content/${filename}`;
    const markdown = files[path];

    if (!markdown) {
        throw new Error(`Markdown file not found: ${filename}`);
    }

    return marked.parse(markdown);
}