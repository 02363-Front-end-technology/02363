import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
	<div className='bg-gradient-to-tl from-blue-700'>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		</Head>
		<div className='flex min-h-screen items-center justify-center'>{children}</div>
	</div>
);

export default Layout;
