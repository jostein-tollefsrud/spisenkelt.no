import { defineQuery } from 'next-sanity';

import { recipeTypeName } from '../schemaTypes/constants';

const imageFields = `//groq
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
			${imageFields}
		}
	}`
);

export const recipesQuery = defineQuery(`
	*[_type == "${recipeTypeName}"]{
		...,
		mainImage {
			${imageFields}
		}
	}
`);
