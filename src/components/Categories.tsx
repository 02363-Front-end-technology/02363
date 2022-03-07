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
          <Button className={`${activeTab === Tab.FRONTEND ? "active" : ""}`} onClick={() => setActiveTab(Tab.FRONTEND)}>Frontend</Button>
          <Button className={`${activeTab === Tab.BACKEND ? "active" : ""}`} onClick={() => setActiveTab(Tab.BACKEND)}>Backend</Button>
          <Button className={`${activeTab === Tab.ADS ? "active" : ""}`} onClick={() => setActiveTab(Tab.ADS)}>Ads</Button>
        </div>
        {children}
      </div>
    )
  }

  export default Categories
