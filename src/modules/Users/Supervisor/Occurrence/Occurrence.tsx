import { useState } from "react";
import { CalendarRemove, ReceiveSquare2, TransmitSqaure2 } from "iconsax-react";
import LateArrival from "./LateArrival/LateArrival";
import EarlyArrival from "./EarlyArrival/EarlyArrival";
import NCNS from "./NCNS/NCNS";

const Occurence = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabClick = (index: any) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      id: 1,
      name: "Late Arrival",
      icon: <ReceiveSquare2 size="20" color="#46B0E6" />,
    },
    {
      id: 2,
      name: "Early Leave",
      icon: <TransmitSqaure2 size="20" color="#46B0E6" />,
    },
    {
      id: 3,
      name: "NCNS/Unapproved Absence",
      icon: <CalendarRemove size="20" color="#46B0E6" />,
    },
  ];

  let content: any = "";
  if (activeTab === tabs[0].id) {
    content = <LateArrival />;
  } else if (activeTab === tabs[1].id) {
    content = <EarlyArrival />;
  } else if (activeTab === tabs[2].id) {
    content = <NCNS />;
  }

  return (
    <>
      <div className="occurenceRuleDef">
        <div className="component-container">
          {/* main header */}
          <div className="component-header">
            <div className="col-md-12">
              <h2>Occurence rules Definition</h2>
            </div>
          </div>

          <div className="main row">
            {/* tabs */}
            <div className="tabs">
              <ul>
                {tabs.map((menu) => (
                  <li
                    key={menu.name}
                    onClick={() => tabClick(menu.id)}
                    className={menu.id === activeTab ? "active-li" : " "}
                  >
                    <i className="menu-icon">{menu.icon}</i>
                    <span>{menu.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* tab-content */}
            <div className="content-container">{content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Occurence;
