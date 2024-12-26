import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { ingredientTypeName } from './constants';

export const ingredientType = defineType({
	name: ingredientTypeName,
	title: 'Ingrediens',
	type: 'document',
	icon: TagIcon,
	fields: [
		defineField({
			title: 'Tittel',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
	],
});
