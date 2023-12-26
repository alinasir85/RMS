import { useState } from 'react'
import { Calendar, CalendarTick, Moon, SunFog } from 'iconsax-react';
import RegularShift from './RegularShift/RegularShift';
import D1Shift from './D1Shift/D1Shift';
import D2Shift from './D2Shift/D2Shift';
import D3Shift from './D3Shift/D3Shift';

const ShiftHourDef = () => {
    const [activeTab, setActiveTab] = useState(1);
    const tabClick = (index: any) => {setActiveTab(index);};

    const tabs = [
        {
          id: 1,
          name: "Regular Shift",
          icon: <Calendar size="20" color="#46B0E6"/>,
        },
        {
          id: 2,
          name: "D1 Shift",
          icon: <SunFog size="20" color="#46B0E6" />,
        },
        {
          id: 3,
          name: "D2 Shift",
          icon: <Moon size="20" color="#46B0E6" />,
        },
        {
            id: 4,
            name: "D3 Shift",
            icon: <CalendarTick size="20" color="#46B0E6" />,
          },
      ];


      let content:any = '';
      if(activeTab === tabs[0].id){content = <RegularShift />}
      else if(activeTab === tabs[1].id){content = <D1Shift />} 
      else if(activeTab === tabs[2].id){content = <D2Shift />} 
      else if(activeTab === tabs[3].id){content = <D3Shift />} 

      
  return (
    <>
    <div className="shiftHoursDef">
        <div className="component-container">
          {/* main header */}
          <div className="component-header">
            <div className="col-md-12">
              <h2>Shift Hours Definition</h2>
            </div>
          </div>

          <div className="main row">
            {/* tabs */}
            <div className="tabs">
              <ul>
                {tabs.map((menu) => (
                  <li key={menu.name} onClick={() => tabClick(menu.id)} className={menu.id === activeTab ? "active-li" : " "} >
                    <i className="menu-icon">{menu.icon}</i>
                    <span>{menu.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* tab-content */}
            <div className="content-container">
              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShiftHourDef