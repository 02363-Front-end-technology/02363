import { Button } from "@chakra-ui/react"
import { Tab } from "@Interfaces/enums"
import React, { Dispatch, SetStateAction } from "react";

type Props = {
	activeTab: Tab;
  setActiveTab: Dispatch<SetStateAction<Tab>>;
}

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

  export default Categories
