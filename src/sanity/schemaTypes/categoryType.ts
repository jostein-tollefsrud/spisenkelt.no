import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { categoryTypeName } from './constants';

export const categoryType = defineType({
	name: categoryTypeName,
	title: 'Category',
	type: 'document',
	icon: TagIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		}),
		defineField({
			name: 'description',
			type: 'text',
		}),
	],
});
