import { defineQuery } from 'next-sanity';

import { recipeTypeName } from '../schemaTypes/constants';

const imageFragment = `//groq
	hotspot,
	crop,
	alt,
	asset->{
		_id,
		metadata {
			lqip
		}
	}
`;

export const recipeBySlugQuery = defineQuery(
	`*[_type == "${recipeTypeName}" && slug.current == $slug][0]{
		...,
		mainImage {
			${imageFragment}
		},
		ingredients[]->{
			...
		}
	}`
);

export const recipesQuery = defineQuery(`
	*[_type == "${recipeTypeName}"]{
		...,
		mainImage {
			${imageFragment}
		}
	}
`);
