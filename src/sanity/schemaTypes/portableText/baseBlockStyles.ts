import { BlockStyleDefinition } from 'sanity';

// Styles let you define what blocks can be marked up as. The default
// set corresponds with HTML tags, but you can set any title or value
// you want, and decide how you want to deal with it where you want to
// use your content.
export const baseBlockStyles: BlockStyleDefinition[] = [
	{ title: 'Normal', value: 'normal' },
	{ title: 'H2', value: 'h2' },
	{ title: 'H3', value: 'h3' },
	{ title: 'H4', value: 'h4' },
	{ title: 'Quote', value: 'blockquote' },
];
