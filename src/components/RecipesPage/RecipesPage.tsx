import clsx from 'clsx';
import Link from 'next/link';

import { RecipesQueryResult } from '@/sanity/types';

interface Props {
	recipes: RecipesQueryResult;
}

export default function RecipesPage({ recipes }: Props) {
	return (
		<div className={clsx('max-w-7xl', 'mx-auto', 'p-4')}>
			<h1>Oppskrifter</h1>
			<ul>
				{recipes.map((recipe) => (
					<li key={recipe._id}>
						<Link href={`/oppskrifter/${recipe.slug?.current}`}>
							{recipe.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
