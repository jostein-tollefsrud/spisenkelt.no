import clsx from 'clsx';
import { notFound } from 'next/navigation';

import { RecipeBySlugQueryResult } from '@/sanity/types';

import PortableText from '../PortableText/PortableText';
import Instructions from './Instructions';
import MainImage from './MainImage';

interface Props {
	recipe: RecipeBySlugQueryResult;
}

export default function RecipePage({ recipe }: Props) {
	if (!recipe) {
		return notFound();
	}

	return (
		<div className={clsx('max-w-7xl', 'mx-auto', 'px-4', 'pb-8')}>
			{recipe.mainImage && <MainImage image={recipe.mainImage} />}
			<div className={clsx('py-8', 'mb-8', 'text-center')}>
				<div className={clsx('max-w-2xl', 'mx-auto', 'text-pretty')}>
					<h1 className={clsx('font-bold', 'text-4xl', 'mb-2')}>
						{recipe.title}
					</h1>
					{recipe.description && (
						<PortableText value={recipe.description} />
					)}
				</div>
			</div>
			<div className={clsx('grid', 'md:grid-cols-3', 'gap-8')}>
				<div className={clsx('md:col-span-1')}>
					<h2 id="ingredients" className={clsx('font-bold', 'mb-2')}>
						Ingredienser
					</h2>

					<ol aria-labelledby="ingredients">
						{recipe.ingredients?.map((ingredient) => (
							<li key={ingredient._id}>{ingredient.title}</li>
						))}
					</ol>
				</div>

				<div className={clsx('md:col-span-2')}>
					<h2 id="instructions" className={clsx('font-bold', 'mb-2')}>
						Fremgangsmåte
					</h2>

					{recipe.instructions && (
						<Instructions instructions={recipe.instructions} />
					)}
				</div>
			</div>
		</div>
	);
}
