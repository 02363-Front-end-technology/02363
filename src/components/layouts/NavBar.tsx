import style from '@Styles/WebsiteLayout.module.css';
import Image from 'next/image';

const NavBar = () => (
	<div className={style.navbar}>
		<div className={style.navbarLogo}>
			<Image alt='logo' src='/ff.png' width='24' height='24' />
		</div>
		<div className={style.title}>02363 Shop</div>
		<div className={style.search}>
			<input type='text' className={style.input} placeholder='Search' />
			<button className='btn small alternative'>Search</button>
		</div>
		<div className={style.flexEnd}>
			<div className={style.item}>
				<button className='btn alternative'>Sign in</button>
			</div>
			<div className={style.item}>
				<button className='btn alternative'>My Cart</button>
			</div>
		</div>
	</div>
);

export default NavBar;
