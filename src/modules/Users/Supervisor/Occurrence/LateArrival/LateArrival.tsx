import { useState } from 'react'
import { Trash,  AddCircle,} from "iconsax-react";
import {  I2cButton,  I2cInput,  I2cMenuItem,  I2cSelect,} from "@webcomponents/i2cwebcomponents/dist/react";



const LateArrival = () => {
    const [id, setId] = useState('T1 (Late Arrivals)');
    const [startShift, setstartShift] = useState("Shift Time");
    const [startValue, setStartValue] = useState('0');
    const [endShift, setEndShift] = useState('Shift Time');
    const [endValue, setEndValue] = useState('0');
    const [endOcc, setEndOcc] = useState('0');
    const [startRadio,setStartRadio] = useState('');
    const [endRadio,setEndRadio] = useState('');
    
    const [showEnd, setShowEnd] = useState(1);

    const LateformData = { id: '',  startShift:'', startRadio:'', startValue:'', endShift:'', endRadio:'', endValue:'', endOcc:'' }

    const handleLateArrivalSubmit = (event:any) =>{
        event.preventDefault();
        LateformData.id=id
        LateformData.startShift=startShift
        LateformData.startRadio=startRadio
        LateformData.startValue=startValue
        LateformData.endRadio=endRadio
        LateformData.endShift=endShift
        LateformData.endValue=endValue
        LateformData.endOcc=endOcc
        alert('submitted!')
    }
    const removeEndBlock = () => {   showEnd === 1 ? setShowEnd(0) : setShowEnd(1);  };
    
    
  return (
    <div className="content" >
                <div className="tab-header">
                  <h3>Schedule Occurences Rules (Late Arrivals)</h3>
                </div>

                {/* tab-form */}
                <form onSubmit={handleLateArrivalSubmit}>
                  <div className="id row">
                    <div className="col-md-3">
                      <I2cSelect label="Occurence ID/Name" size="medium" className="occurrenc-select" value={id} onI2cChange={(event:any) => setId(event.target.value)}>
                        <I2cMenuItem value="T1 (Late Arrivals)">T1 (Late Arrivals)</I2cMenuItem>
                        <I2cMenuItem value="T2 (Late Arrivals)">T2 (Late Arrivals)</I2cMenuItem>
                        <I2cMenuItem value="T3 (Late Arrivals)">T3 (Late Arrivals)</I2cMenuItem>
                      </I2cSelect>
                    </div>
                  </div>
                  {/* Start */}
                  <span>Start</span>
                  <div className="start row">
                    <div className="start-category col-md-3">
                      <I2cSelect label="Shift Category" size="medium" className="occurrenc-select"  value={startShift} onI2cChange={(event:any) => setstartShift(event.target.value)}>
                        <I2cMenuItem value="Shift Time">Shift Time</I2cMenuItem> 
                        <I2cMenuItem value="Shift Percentage"> Shift Percentage </I2cMenuItem>
                      </I2cSelect>
                    </div>
                    <div className="start-radio-buttons col-md-3">
                      <input type="radio" id="test10" name="radio-group" value='=' onChange={(event:any) =>setStartRadio(event.target.value)}/>
                      <label htmlFor="test10">=<span>Time is Equal to</span></label>
                      <input type="radio" id="test11" name="radio-group" value='<' onChange={(event:any) =>setStartRadio(event.target.value)}/>
                      <label htmlFor="test11">&lt;<span>Time is Less than</span></label>
                      <input type="radio" id="test12" name="radio-group" value='<=' onChange={(event:any) =>setStartRadio(event.target.value)}/>
                      <label htmlFor="test12"> &le;<span>Time is Less than Equal to</span></label>
                      <input type="radio" id="test13" name="radio-group" value='>' onChange={(event:any) =>setStartRadio(event.target.value)}/>
                      <label htmlFor="test13">&gt;<span>Time is Greater than</span></label>
                      <input type="radio" id="test14" name="radio-group" value='>=' onChange={(event:any) =>setStartRadio(event.target.value)}/>
                      <label htmlFor="test14">&ge;<span>Time is Greater than Equal to</span></label>
                    </div>
                    <div className="start-radio-input col-md-3">
                      <span>min</span>
                      <I2cInput label="Value" className="occurrenc-input" value={startValue} onI2cChange={(event:any) => setStartValue(event.target.value)}/>
                    </div>
                  </div>
                  {/* End */}
                  
                  <div className={ showEnd == 1 ? "late-end" : "late-end hide" } >
                    <span>End</span>
                    <div className="row">
                      <div className="start-category col-md-2">
                        <I2cSelect label="Shift Category" size="medium" className="occurrenc-select" value={endShift} onI2cChange={(event:any) => setEndShift(event.target.value)} >
                          <I2cMenuItem value="Shift Time">Shift Time</I2cMenuItem>
                          <I2cMenuItem value="Shift Percentage">Shift Percentage</I2cMenuItem>
                        </I2cSelect>
                      </div>
                      <div className="start-radio-buttons col-md-2 end">
                        <input type="radio" id="test15" name="radio-group2" value='=' onChange={(event:any) =>setEndRadio(event.target.value)} />
                        <label htmlFor="test15">=<span>Time is Equal to</span></label>
                        <input type="radio" id="test16" name="radio-group2" value='<' onChange={(event:any) =>setEndRadio(event.target.value)}/>
                        <label htmlFor="test16">&lt;<span>Time is Less than</span></label>
                        <input type="radio" id="test17" name="radio-group2" value='<=' onChange={(event:any) =>setEndRadio(event.target.value)}/>
                        <label htmlFor="test17"> &le;<span>Time is Less than Equal to</span></label>
                        <input type="radio" id="test18" name="radio-group2" value='>' onChange={(event:any) =>setEndRadio(event.target.value)}/>
                        <label htmlFor="test18">&gt;<span>Time is Greater than</span></label>
                        <input type="radio" id="test19" name="radio-group2" value='>=' onChange={(event:any) =>setEndRadio(event.target.value)}/>
                        <label htmlFor="test19">&ge;<span>Time is Greater than Equal to</span></label>
                      </div>
                      <div className="start-radio-occurence col-md-1">
                        <span>min</span>
                        <I2cInput label="Value" className="occurrenc-input" value={endValue} onI2cChange={(event:any) => setEndValue(event.target.value)} />
                      </div>
                      <div className="start-radio-occurence col-md-1">
                        <span>pt</span>
                        <I2cInput label="Occurrence" className="occurrenc-input" value={endOcc} onI2cChange={(event:any) => setEndOcc(event.target.value)} />
                      </div>
                      <div className="start-radio-delete col-md-1">
                        <div className='dlt-icon'>
                           <Trash size="25" color="#666" onClick={removeEndBlock} />
                        </div>
                       
                      </div>
                    </div>
                  </div>
                  {/* Add End */}
                  <div className={ showEnd == 0 ? "occ-late-add" : "occ-late-add hide" } onClick={removeEndBlock} >
                    <AddCircle size="32" color="#CCCCCC" />
                    <span>Add End Rule</span>
                  </div>
                  <div className="occ-late-buttons">
                    <I2cButton>Cancel</I2cButton>
                    <I2cButton type='submit' variant="primary">Save</I2cButton>
                    
                  </div>
                </form>
              </div>
  )
}

export default LateArrival