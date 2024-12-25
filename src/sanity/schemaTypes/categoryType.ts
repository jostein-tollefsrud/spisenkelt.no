import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { categoryTypeName } from './constants';

export const categoryType = defineType({
	name: categoryTypeName,
	title: 'Kategori',
	type: 'document',
	icon: TagIcon,
	fields: [
		defineField({
			title: 'Tittel',
			name: 'title',
			type: 'string',
		}),
		defineField({
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		}),
		defineField({
			title: 'Beskrivelse',
			name: 'description',
			type: 'text',
		}),
	],
});
