import Link from 'next/link';
import FrontpageLayout from '@Components/layouts/FrontpageLayout/FrontpageLayout';
import style from '@Components/layouts/FrontpageLayout/FrontpageLayout.module.css';

const IndexPage = () => {
	return (
		<FrontpageLayout>
			<div className={style.content}>
				<Link href='/new-game'>
					<button className={style.btn}><a data-cy='new-game'>New Game</a></button>
				</Link>

				<Link href='/load-game'>
					<button className={style.btn}><a data-cy='load-game'>Load Game</a></button>
				</Link>
			</div>
		</FrontpageLayout>
	);
};

export default IndexPage;
