import Image from 'next/image';

import { urlFor } from '@/sanity/lib/image';
import { RecipeBySlugQueryResult } from '@/sanity/types';

type MainImage = NonNullable<RecipeBySlugQueryResult>['mainImage'];

interface Props {
	image: NonNullable<MainImage>;
}

export default function MainImage({ image }: Props) {
	return (
		<Image
			src={urlFor(image)?.width(1920).height(1080).dpr(2).url() ?? ''}
			width={1920}
			height={1080}
			alt={image.alt ?? ''}
			priority={true}
			blurDataURL={image.asset?.metadata?.lqip ?? undefined}
			sizes="(max-width: 1240px) 100vw, 1248px"
		/>
	);
}
