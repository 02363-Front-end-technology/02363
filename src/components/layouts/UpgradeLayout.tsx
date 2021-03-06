/** contributors
 * Tobias Maneschijn
 * Loui
 * Oliver
 */

import React from 'react';
import TopGameBar from '@Components/topGameBar/TopGameBar';
import Categories from '@Components/Categories';
import UpgradeList from '@Components/upgrades/UpgradeList';
import style from '@Styles/UpgradeLayout.module.css';
import { useRecoilValue } from 'recoil';
import { currentUserGameData } from '../../atoms';
import WebshopUpgradeTabs from '@Components/WebshopUpgradeTabs';

const UpgradeLayout = () => {
	const frontendItems = useRecoilValue(currentUserGameData).items[0].upgrades;

	return (
		<div style={{ height: '100%' }}>
			<TopGameBar />
			<div className={style.layout}>
				<div className={style.container}>
					<div className={`${style.left} h-5/6`}>
						<Categories>
							<UpgradeList />
						</Categories>
					</div>
					<div className={style.right}>
						{frontendItems[0].isBought && (
							<div className='flex flex-col flex-wrap items-center text-center'>
								<h1>Webshop upgrades</h1>
								<WebshopUpgradeTabs />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpgradeLayout;
