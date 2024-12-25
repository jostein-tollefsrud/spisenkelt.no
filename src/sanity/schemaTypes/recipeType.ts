import { DocumentTextIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

import {
	blockContentTypeName,
	categoryTypeName,
	recipeTypeName,
} from './constants';

export const recipeType = defineType({
	title: 'Oppskrift',
	name: recipeTypeName,
	type: 'document',
	icon: DocumentTextIcon,
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
			title: 'Hovedbilde',
			name: 'mainImage',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					title: 'Alternativ tekst',
					name: 'alt',
					type: 'string',
				},
			],
		}),
		defineField({
			title: 'Kategorier',
			name: 'categories',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: { type: categoryTypeName },
				}),
			],
		}),
		defineField({
			title: 'Innhold',
			name: 'body',
			type: blockContentTypeName,
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'mainImage',
		},
		prepare({ title, media }: { title?: string; media?: string }) {
			return { title, media };
		},
	},
});
