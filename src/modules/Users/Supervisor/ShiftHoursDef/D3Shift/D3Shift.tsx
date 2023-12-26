import { useState } from "react";
import DateSelector from "../../../../Common/components/Calendar/DateSelector";
import NotSameDay from "../NotSameDay/NotSameDay";
import SameDay from "../SameDay/SameDay";


const D3Shift = () => {
    // Date States
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Toggle States
  const [sameEdToggle, setSameEdToggle] = useState(1);
  const [customDateToggle, setCustomdateToggle] = useState(0);

  let days = [
    {
        id:0,
        day:'sat',
        abv:'Sa',
        startTime:'',
        endtime:''
    },
    {
        id:1,
        day:'sun',
        abv:'Su',
        startTime:'',
        endtime:''
    }
]
  // Toggle Functionality
  let sameEdToggleChecked: boolean = true;
  let customDateToggleChecked: boolean = true;
  if (sameEdToggle === 1) {
    sameEdToggleChecked = true;
  } else {
    sameEdToggleChecked = false;
  }
  if (customDateToggle === 1) {
    customDateToggleChecked = true;
  } else {
    customDateToggleChecked = false;
  }

  // Toggles
  const SameEverydayToggle = () => {
    return (
      <>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              sameEdToggle === 1 ? setSameEdToggle(0) : setSameEdToggle(1);
              setCustomdateToggle(0);
            }}
            checked={sameEdToggleChecked}
          />
          <span className="slider round"></span>
        </label>
      </>
    );
  };
  

  const formHandler = (event: any) => {
    event.preventDefault();
    console.log(startDate);
  };
  return (
    <div className="content">
      <div className="tab-header">
        <h3>D3 Shift</h3>
      </div>

      <form onSubmit={formHandler}>
        {/* Dates */}
        <div className="date ">
          <div className="start-date ">
            <DateSelector
              text="Start Date"
              value={startDate}
              onChange={(value: any) => setStartDate(value)}
            />
          </div>
          <div className="start-date ">
            <DateSelector
              text="End Date"
              value={endDate}
              onChange={(value: any) => setEndDate(value)}
            />
          </div>
        </div>
        {/* Toggles */}
        <div className="switches">
          <div className="same">
            <SameEverydayToggle />
            <span className="switch-text">Same Everyday</span>
          </div>
          <div className="custom ">
            {''}
          </div>
        </div>
        {/* Times */}
        <div className="times">
          <div className="row">{sameEdToggle === 1 ? <SameDay  days={days}/> : <NotSameDay customDateToggle={customDateToggle} days={days}/>}</div>
        </div>
      </form>
    </div>
  )
}

export default D3Shift