import { DocumentTextIcon, OlistIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

import { ingredientTypeName, recipeTypeName } from './constants';

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
			title: 'Ingredienser',
			name: 'ingredients',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					title: 'Ingrediens',
					to: { type: ingredientTypeName },
				}),
			],
		}),
		defineField({
			title: 'Fremgangsmåte',
			name: 'instructions',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					name: 'step',
					title: 'Steg',
					icon: OlistIcon,
					fields: [
						defineField({
							type: 'array',
							name: 'description',
							title: 'Beskrivelse',
							of: [
								defineArrayMember({
									type: 'block',
									name: 'block',
									styles: [
										{ title: 'Normal', value: 'normal' },
									],
								}),
							],
						}),
					],
				}),
			],
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
