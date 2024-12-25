import clsx from 'clsx';
import { notFound } from 'next/navigation';

import { RecipeBySlugQueryResult } from '@/sanity/types';

interface Props {
	recipe: RecipeBySlugQueryResult;
}

export default function RecipePage({ recipe }: Props) {
	if (!recipe) {
		return notFound();
	}

	return (
		<div className={clsx('max-w-7xl', 'mx-auto', 'p-4')}>
			{recipe.title}
		</div>
	);
}
