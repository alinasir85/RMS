import { I2cButton } from '@webcomponents/i2cwebcomponents/dist/react';
import { useState } from 'react'
import { TimeSelector } from '../../../../Common/components/Calendar/TimeSelector';

const SameDay = (props:any) => {

    const [activeDay, setActiveDay] = useState(0);
    const dayClick = (index: any) => {setActiveDay(index);};

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('')


    

    const timeSetter = () =>{
        props.days[activeDay].startTime =startTime;
        props.days[activeDay].endtime =endTime;
    }

   

  return (
    <>
        <div className='sameDay'>
            <ul>
                {props.days.map((menu:any) => (
                    <li key={menu.id} onClick={() => {dayClick(menu.id);}} className={ menu.id === activeDay? 'active-li': (menu.id === 5 || menu.id === 6) ? "inactive-li ":''} >
                    <span>{menu.abv}</span>
                </li>
                ))}
            </ul>
            <div className='times'>
                <div className="start-time">
                    <TimeSelector label={'Start Time'} className='p-0' onChange={(value:any)=>{setStartTime(value)}}/>
                </div>
                <div className="start-time">
                    <TimeSelector label={'End Time'} className='p-0' onChange={(e:any)=>{setEndTime(e.target.value)}}/>
                </div>
                <span>8h 30min</span> 
            </div>
        </div>
        <div className="sameDaybuttons">
          <I2cButton>Cancel</I2cButton>
          <I2cButton type='submit' variant="primary">Save</I2cButton>
        </div>

    </>
  )
}

export default SameDay