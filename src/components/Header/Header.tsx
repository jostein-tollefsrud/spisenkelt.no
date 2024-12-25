import clsx from 'clsx';
import Link from 'next/link';

export default function Header() {
	return (
		<header
			className={clsx('bg-primary', 'text-primary-foreground', 'p-4')}
		>
			<div
				className={clsx(
					'max-w-7xl',
					'mx-auto',
					'flex',
					'justify-between',
					'gap-4'
				)}
			>
				<Link href="/">Spisenkelt</Link>
				<nav>
					<ul>
						<li>
							<Link href="/">Hjem</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
