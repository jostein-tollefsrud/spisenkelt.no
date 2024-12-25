import type { StructureResolver } from 'sanity/structure';

import { categoryTypeName, recipeTypeName } from './schemaTypes/constants';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title('Innhold')
		.items([
			S.documentTypeListItem(recipeTypeName).title('Oppskrifter'),
			S.documentTypeListItem(categoryTypeName).title('Kategorier'),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() &&
					![recipeTypeName, categoryTypeName].includes(
						item.getId() ?? ''
					)
			),
		]);
