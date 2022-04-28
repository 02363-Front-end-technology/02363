/** contributors
 * Oliver Christensen
 */

import React, { ReactNode } from 'react';
import Head from 'next/head';
import style from '@Styles/FrontpageLayout.module.css';

type Props = {
	children?: ReactNode;
	title?: string;
};

const FrontpageLayout = ({ children, title = 'This is the default title' }: Props) => (
	<div className={style.layout}>
		<div className={style.titleBar}>
			<span className={style.title}>IDLE GAME</span>
		</div>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		</Head>
		<div className={style.container}>
			<div className={style.header}>IDLE GAME</div>
			{children}
		</div>
		<div></div>
	</div>
);

export default FrontpageLayout;
