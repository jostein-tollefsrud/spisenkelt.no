import { type SchemaTypeDefinition } from 'sanity';

import { ingredientType } from './ingredientType';
import { blockContentType } from './portableText/blockContentType';
import { recipeType } from './recipeType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, ingredientType, recipeType],
};
