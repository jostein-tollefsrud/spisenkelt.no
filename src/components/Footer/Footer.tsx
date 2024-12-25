import clsx from 'clsx';

export default function Footer() {
	return (
		<footer
			className={clsx(
				'bg-primary',
				'text-primary-foreground',
				'p-4',
				'text-center'
			)}
		>
			<div className={clsx('max-w-7xl', 'mx-auto')}>spisenkelt.no</div>
		</footer>
	);
}
