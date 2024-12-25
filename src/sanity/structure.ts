import type { StructureResolver } from 'sanity/structure';

import {
	authorTypeName,
	categoryTypeName,
	recipeTypeName,
} from './schemaTypes/constants';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title('Blog')
		.items([
			S.documentTypeListItem(recipeTypeName).title('Posts'),
			S.documentTypeListItem(categoryTypeName).title('Categories'),
			S.documentTypeListItem(authorTypeName).title('Authors'),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() &&
					![
						recipeTypeName,
						categoryTypeName,
						authorTypeName,
					].includes(item.getId() ?? '')
			),
		]);
