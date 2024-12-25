import { DocumentTextIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

import {
	authorTypeName,
	blockContentTypeName,
	categoryTypeName,
	recipeTypeName,
} from './constants';

export const recipeType = defineType({
	name: recipeTypeName,
	title: 'Recipe',
	type: 'document',
	icon: DocumentTextIcon,
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
			name: 'author',
			type: 'reference',
			to: { type: authorTypeName },
		}),
		defineField({
			name: 'mainImage',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
				},
			],
		}),
		defineField({
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
			name: 'publishedAt',
			type: 'datetime',
		}),
		defineField({
			name: 'body',
			type: blockContentTypeName,
		}),
	],
	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare({
			author,
			title,
			media,
		}: {
			author?: string;
			title?: string;
			media?: string;
		}) {
			return { title, media, subtitle: author && `by ${author}` };
		},
	},
});
