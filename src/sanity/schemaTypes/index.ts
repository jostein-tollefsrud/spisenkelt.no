import { type SchemaTypeDefinition } from 'sanity';

import { authorType } from './authorType';
import { categoryType } from './categoryType';
import { blockContentType } from './portableText/blockContentType';
import { recipeType } from './recipeType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, categoryType, recipeType, authorType],
};
