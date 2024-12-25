import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/sanity/lib/image';
import { RecipesQueryResult } from '@/sanity/types';

interface Props {
	recipes: RecipesQueryResult;
}

export default function RecipesPage({ recipes }: Props) {
	return (
		<div className={clsx('max-w-7xl', 'mx-auto', 'p-4')}>
			<h1>Oppskrifter</h1>
			<ul
				className={clsx(
					'grid',
					'grid-cols-1',
					'gap-8',
					'sm:grid-cols-3'
				)}
			>
				{recipes.map((recipe) => (
					<li key={recipe._id}>
						<Link href={`/oppskrifter/${recipe.slug?.current}`}>
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
										recipe.mainImage.asset?.metadata
											?.lqip ?? undefined
									}
									sizes="300px"
								/>
							)}
							{recipe.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
