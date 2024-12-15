import { type SchemaTypeDefinition } from 'sanity';

import { authorType } from './authorType';
import { categoryType } from './categoryType';
import { blockContentType } from './portableText/blockContentType';
import { postType } from './postType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, categoryType, postType, authorType],
};
