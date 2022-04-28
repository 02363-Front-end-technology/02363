import style from '@Styles/WebsiteLayout.module.css';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { currentWebshopColorState } from '../../selectors';

/** contributors
 * Tobias Maneschijn
 * Loui
 */

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
				<button className='btn small alternative'  style={{backgroundColor: color}} >Search</button>
			</div>
			<div className={style.flexEnd}>
				<div className={style.item}>
					<button className={`btn`} style={{backgroundColor: color}}>Sign in</button>
				</div>
				<div className={style.item}>
					<button className='btn'  style={{backgroundColor: color}}>My Cart</button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
