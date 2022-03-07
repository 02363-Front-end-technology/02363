import { Button } from "@chakra-ui/react"
import { Tab } from "@Interfaces/enums"
import { Dispatch, SetStateAction } from "react";

type Props = {
	activeTab: Tab;
  setActiveTab: Dispatch<SetStateAction<Tab>>;
}

const Categories: React.FC<Props> = (props) => {
    return (
      <div className='categories'>
        
        <Button className={`${props.activeTab === Tab.FRONTEND ? "active" : ""}`} onClick={() => props.setActiveTab(Tab.FRONTEND)}>Frontend</Button>
        <Button className={`${props.activeTab === Tab.BACKEND ? "active" : ""}`} onClick={() => props.setActiveTab(Tab.BACKEND)}>Backend</Button>
        <Button className={`${props.activeTab === Tab.ADS ? "active" : ""}`} onClick={() => props.setActiveTab(Tab.ADS)}>Ads</Button>
      </div>
    )
  }
  
  export default Categories