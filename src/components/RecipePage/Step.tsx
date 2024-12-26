'use client';

import clsx from 'clsx';
import { useCallback, useState } from 'react';

import PortableText from '../PortableText/PortableText';
import { Instructions } from './Instructions';

type Step = NonNullable<Instructions>[number];

interface Props {
	step: NonNullable<Step>;
	number: number;
}

export default function Step({ step, number }: Props) {
	const [checked, setChecked] = useState(false);

	const handleCheckboxChange = useCallback(() => {
		setChecked((prev) => !prev);
	}, []);

	return (
		<li
			key={step._key}
			className={clsx(
				'flex',
				'gap-2',
				'relative',
				'items-start',
				'bg-secondary',
				'p-4',
				'transition-colors',
				checked && ['bg-green-100', 'text-green-950']
			)}
		>
			<input
				type="checkbox"
				checked={checked}
				id={`step-${step._key}`}
				onChange={handleCheckboxChange}
				className={clsx(
					'mt-[0.3rem]',
					'after:inset-0',
					'after:absolute'
				)}
			/>
			<label
				htmlFor={`step-${step._key}`}
				className={clsx('flex', 'gap-2')}
			>
				<span className="font-bold">{number}.</span>{' '}
				{step.description && <PortableText value={step.description} />}
			</label>
		</li>
	);
}
