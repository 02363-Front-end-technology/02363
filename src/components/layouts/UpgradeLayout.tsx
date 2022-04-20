import React from 'react';
import TopGameBar from '@Components/topGameBar/TopGameBar';
import Categories from '@Components/Categories';
import UpgradeList from '@Components/upgrades/UpgradeList';
import style from '@Styles/UpgradeLayout.module.css';

const UpgradeLayout = () => {
	return (
		<div style={{ height: '100%' }}>
			<TopGameBar />
			<div className={style.layout}>
				<div className={style.container}>
					<div className={style.left}>
						<Categories>
							<UpgradeList />
						</Categories>
					</div>
					<div className={style.right}>
						<div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpgradeLayout;
