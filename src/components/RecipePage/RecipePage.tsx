import clsx from 'clsx';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { urlFor } from '@/sanity/lib/image';
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
			{recipe.mainImage && (
				<Image
					src={
						urlFor(recipe.mainImage)
							?.width(1920)
							.height(1080)
							.dpr(2)
							.url() ?? ''
					}
					width={1920}
					height={1080}
					alt={recipe.mainImage.alt ?? ''}
					priority={true}
					blurDataURL={
						recipe.mainImage.asset?.metadata?.lqip ?? undefined
					}
					sizes="(max-width: 768px) 100vw, 70vw"
				/>
			)}
			{recipe.title}
		</div>
	);
}
