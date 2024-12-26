import clsx from 'clsx';

import { RecipeBySlugQueryResult } from '@/sanity/types';

import Step from './Step';

export type Instructions = NonNullable<RecipeBySlugQueryResult>['instructions'];

interface Props {
	instructions: NonNullable<Instructions>;
}

export default function Instructions({ instructions }: Props) {
	return (
		<ol aria-labelledby="instructions" className={clsx('space-y-2')}>
			{instructions.map((step, idx) => (
				<Step key={step._key} step={step} number={idx + 1} />
			))}
		</ol>
	);
}
