import { marked } from 'marked';
import YAML from 'yaml';

const files = import.meta.glob('/src/content/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
});

export function getSection(filename) {
    const path = `/src/content/${filename}`;
    const rawMarkdown = files[path];

    if (!rawMarkdown) {
        throw new Error(`Markdown file not found: ${filename}`);
    }

    const match = rawMarkdown.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);

    if (!match) {
        return {
            body: marked.parse(rawMarkdown)
        };
    }

    const frontMatter = YAML.parse(match[1]);
    const markdownBody = match[2];

    return {
        ...frontMatter,
        body: marked.parse(markdownBody)
    };
}
