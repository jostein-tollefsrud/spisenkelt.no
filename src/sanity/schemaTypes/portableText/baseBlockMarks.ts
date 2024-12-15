import { BlockDecoratorDefinition, BlockMarksDefinition } from 'sanity';

// Decorators usually describe a single property – e.g. a typographic
// preference or highlighting
const baseBlockDecorators: BlockDecoratorDefinition[] = [
	{ title: 'Strong', value: 'strong' },
	{ title: 'Emphasis', value: 'em' },
];

// Annotations can be any object structure – e.g. a link or a footnote.
const baseBlockAnnotations: BlockMarksDefinition['annotations'] = [
	{
		title: 'URL',
		name: 'link',
		type: 'object',
		fields: [
			{
				title: 'URL',
				name: 'href',
				type: 'url',
			},
		],
	},
];

// Marks let you mark up inline text in the Portable Text Editor
export const baseBlockMarks: BlockMarksDefinition = {
	decorators: baseBlockDecorators,
	annotations: baseBlockAnnotations,
};
