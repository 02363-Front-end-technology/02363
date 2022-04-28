/** contributors
 * Oliver Christensen
 * Tobias Maneschijn
 * Loui
 */

import style from '@Styles/WebsiteLayout.module.css';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { currentWebshopColorState } from '../../selectors';

const NavBar = () => {
	const color = useRecoilValue(currentWebshopColorState)

	return (
		<div className={style.navbar}>
			<div className={style.navbarLogo}>
				<Image alt='logo' src='/ff.png' width='24' height='24' />
			</div>
			<div className={style.title}>02363 Shop</div>
			<div className={style.search}>
				<input type='text' className={style.input} placeholder='Search'/>
				<button className='btn small alternative'  style={{backgroundColor: color}} data-cy='search-button'>Search</button>
			</div>
			<div className={style.flexEnd}>
				<div className={style.item}>
					<button className={`btn`} style={{backgroundColor: color}} data-cy='sign-in-button'>Sign in</button>
				</div>
				<div className={style.item}>
					<button className='btn' style={{backgroundColor: color}} data-cy='cart-button'>My Cart</button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
