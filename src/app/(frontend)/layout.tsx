import '../globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { Buenard,Work_Sans } from 'next/font/google';
import { ReactNode } from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { SanityLive } from '@/sanity/lib/live';

const fontBody = Work_Sans({
	variable: '--font-sans',
	subsets: ['latin'],
});

const fontDisplay = Buenard({
	variable: '--font-display',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Spisenkelt.no',
	description: 'Enkle oppskrifter'
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="nb-NO">
			<body
				className={clsx(
					fontBody.variable,
					fontDisplay.variable,
					'min-h-screen',
					'flex',
					'flex-col',
				)}
			>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
				<SanityLive />
			</body>
		</html>
	);
}
