import { Tab } from '@Interfaces/enums';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
	activeTab: Tab;
	setActiveTab: Dispatch<SetStateAction<Tab>>;
};

const Categories: React.FC<Props> = ({setActiveTab, activeTab,children}) => {
    return (
      <div className='categories'>
        <div className='flex justify-evenly'>
          <button className={`${"btn medium"} ${activeTab === Tab.Frontend && "active"}`} onClick={() => setActiveTab(Tab.Frontend)}>Frontend</button>
          <button className={`${"btn medium"} ${activeTab === Tab.Backend  && "active"}`} onClick={() => setActiveTab(Tab.Backend)}>Backend</button>
          <button className={`${"btn medium"} ${activeTab === Tab.Ads  && "active"}`} onClick={() => setActiveTab(Tab.Ads)}>Ads</button>
        </div>
        {children}
      </div>
    )
  }

export default Categories;
