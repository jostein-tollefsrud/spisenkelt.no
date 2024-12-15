import { ImageIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

import { baseBlockLists } from './baseBlockLists';
import { baseBlockMarks } from './baseBlockMarks';
import { baseBlockStyles } from './baseBlockStyles';

export const imageArrayMember = defineArrayMember({
	type: 'image',
	icon: ImageIcon,
	options: { hotspot: true },
	fields: [
		defineField({
			name: 'alt',
			type: 'string',
			title: 'Alternative Text',
		}),
	],
});

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
	title: 'Block Content',
	name: 'blockContent',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'block',
			styles: baseBlockStyles,
			lists: baseBlockLists,
			marks: baseBlockMarks,
		}),
		// You can add additional types here. Note that you can't use
		// primitive types such as 'string' and 'number' in the same array
		// as a block type.
		imageArrayMember,
	],
});
