import Link from 'next/link';
import FrontpageLayout from '@Components/layouts/FrontpageLayout';
import style from '@Styles/FrontpageLayout.module.css';

const IndexPage = () => {
	return (
		<FrontpageLayout>
			<div className={style.content}>
				<Link href='/new-game'>
					<button className={'btn'}>
						<a data-cy='new-game'>New Game</a>
					</button>
				</Link>

				<Link href='/load-game'>
					<button className={'btn'}>
						<a data-cy='load-game'>Load Game</a>
					</button>
				</Link>
			</div>
		</FrontpageLayout>
	);
};

export default IndexPage;
