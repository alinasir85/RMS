import { I2cButton } from '@webcomponents/i2cwebcomponents/dist/react';
import { useState } from 'react'
import { TimeSelector } from '../../../../Common/components/Calendar/TimeSelector'


const NotSameDay = (props:any) => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('')

    


    
  return (
    <>
        <ul className='not-same-day'>
            {props.days.map((menu:any) => (
                <li key={menu.id} className={(menu.id === 5 || menu.id ===6)? 'inactive':''}>
                    <div className='times '>
                        <div className='days'>
                            <div>
                                <span className={props.customDateToggle ==  true?  'updatedFontSize':''}> {menu.abv} </span>
                                 {props.customDateToggle ==  true? <span>{10 + menu.id}</span> :''} 
                            </div>
                            
                            
                        </div>
                        <div className="start-time">
                            <TimeSelector label={menu.id===0?'Start Time':''} className='p-0' onChange={(value:any)=>{setStartTime(value)}}/>
                        </div>
                        <div className="start-time">
                            <TimeSelector label={menu.id===0?'End Time':''} className='p-0' onChange={(e:any)=>{setEndTime(e.target.value)}}/>
                        </div> 
                        <div className='calculatedTime'>
                            <span>No Shift</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        <div className="sameDaybuttons">
          <I2cButton>Cancel</I2cButton>
          <I2cButton type='submit' variant="primary">Save</I2cButton>
        </div>
    </>
  )
}

export default NotSameDay