import clsx from 'clsx';

export default function Footer() {
	return (
		<footer
			className={clsx(
				'bg-primary',
				'text-primary-foreground',
				'text-center'
			)}
		>
			<div className={clsx('max-w-7xl', 'mx-auto', 'p-4')}>
				spisenkelt.no
			</div>
		</footer>
	);
}
