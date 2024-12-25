import RecipePage from '@/components/RecipePage/RecipePage';
import { sanityFetch } from '@/sanity/lib/live';
import { recipeBySlugQuery } from '@/sanity/lib/queries';

interface Props {
	params: Promise<{ slug: string }>;
}

export default async function Page(props: Props) {
	const params = await props.params;
	const initial = await sanityFetch({ query: recipeBySlugQuery, params });

	return <RecipePage recipe={initial.data} />;
}
