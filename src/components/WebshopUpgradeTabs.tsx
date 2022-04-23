import { EWebshopUpgrades } from '@Interfaces/enums';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import UpgradeWebshopList from '@Components/upgrades/UpgradeWebshopList';
import { upgradeFilterWebshopState } from '../atoms';

const WebShopUpgadeTabs: React.FC = () => {
	const setActiveTab = useSetRecoilState(upgradeFilterWebshopState);

	const onChange = (index: number) => {
		switch (index) {
			case 0:
				setActiveTab(EWebshopUpgrades.Color);
				break;
			case 1:
				setActiveTab(EWebshopUpgrades.Category);
				break;
			default:
				setActiveTab(EWebshopUpgrades.Color);
				break;
		}
	};
	return (
		<div className='w-7/12'>
			<Tabs onChange={index => onChange(index)}>
				<TabList>
					<Tab>{EWebshopUpgrades.Color}</Tab>
					<Tab isDisabled>{EWebshopUpgrades.Category}</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<UpgradeWebshopList/>
					</TabPanel>
					<TabPanel>
						<UpgradeWebshopList/>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
};

export default WebShopUpgadeTabs;
