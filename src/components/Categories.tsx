import { Button } from '@chakra-ui/react';
import { Tab } from '@Interfaces/enums';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
	activeTab: Tab;
	setActiveTab: Dispatch<SetStateAction<Tab>>;
};

<<<<<<< HEAD
const Categories: React.FC<Props> = ({setActiveTab, activeTab,children}) => {
    return (
      <div className='categories'>
        <div className='flex justify-evenly'>
          <Button className={`${activeTab === Tab.Frontend && "active"}`} onClick={() => setActiveTab(Tab.Frontend)}>Frontend</Button>
          <Button className={`${activeTab === Tab.Backend  && "active"}`} onClick={() => setActiveTab(Tab.Backend)}>Backend</Button>
          <Button className={`${activeTab === Tab.Ads  && "active"}`} onClick={() => setActiveTab(Tab.Ads)}>Ads</Button>
        </div>
        {children}
      </div>
    )
  }
=======
const Categories: React.FC<Props> = ({ setActiveTab, activeTab, children }) => {
	return (
		<div className='categories'>
			<div className='flex justify-evenly'>
				<Button className={`${activeTab === Tab.FRONTEND ? 'active' : ''}`} onClick={() => setActiveTab(Tab.FRONTEND)}>
					Frontend
				</Button>
				<Button className={`${activeTab === Tab.BACKEND ? 'active' : ''}`} onClick={() => setActiveTab(Tab.BACKEND)}>
					Backend
				</Button>
				<Button className={`${activeTab === Tab.ADS ? 'active' : ''}`} onClick={() => setActiveTab(Tab.ADS)}>
					Ads
				</Button>
			</div>
			{children}
		</div>
	);
};
>>>>>>> ebdd4b514a1171d25782332f83c0311a6d48a39f

export default Categories;
