import { defineQuery } from 'next-sanity';

import { recipeTypeName } from '../schemaTypes/constants';

export const recipeBySlugQuery = defineQuery(
	`*[_type == "${recipeTypeName}" && slug.current == $slug][0]`
);

export const recipesQuery = defineQuery(`*[_type == "${recipeTypeName}"]`);
