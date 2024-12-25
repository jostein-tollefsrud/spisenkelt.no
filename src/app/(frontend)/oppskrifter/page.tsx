import RecipesPage from '@/components/RecipesPage/RecipesPage';
import { sanityFetch } from '@/sanity/lib/live';
import { recipesQuery } from '@/sanity/lib/queries';

export default async function Page() {
	const initial = await sanityFetch({ query: recipesQuery });

	return <RecipesPage recipes={initial.data} />;
}
