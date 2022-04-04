import { ETab } from '@Interfaces/enums';
import React from 'react';
import { useRecoilState } from 'recoil';
import { upgradeFilterState } from '../atoms';

const Categories: React.FC = ({ children }) => {
	const [activeTab, setActiveTab] = useRecoilState(upgradeFilterState);

	return (
		<div className='categories'>
			<div className='flex justify-evenly'>
				<button className={`btn medium ${activeTab === ETab.Frontend && 'active'}`} onClick={() => setActiveTab(ETab.Frontend)}>
					{ETab.Frontend}
				</button>
				<button className={`btn medium ${activeTab === ETab.Server && 'active'}`} onClick={() => setActiveTab(ETab.Server)}>
					{ETab.Server}
				</button>
				<button className={`btn medium ${activeTab === ETab.Ads && 'active'}`} onClick={() => setActiveTab(ETab.Ads)}>
					{ETab.Ads}
				</button>
			</div>
			{children}
		</div>
	);
};

export default Categories;
