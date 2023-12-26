import { useState } from 'react'
import {  Trash,  AddCircle,} from "iconsax-react";
import {  I2cButton,  I2cInput,  I2cMenuItem,  I2cSelect,} from "@webcomponents/i2cwebcomponents/dist/react";


const EarlyArrival = () => {
    const [showEnd, setShowEnd] = useState(1);

    // form data states
    const [id, setId] = useState('T1 (Early Arrivals)');
    const [startShift, setstartShift] = useState("Shift Time");
    const [startValue, setStartValue] = useState('0');
    const [endShift, setEndShift] = useState('Shift Time');
    const [endValue, setEndValue] = useState('0');
    const [endOcc, setEndOcc] = useState('0');

    const [startRadio,setStartRadio] = useState('');
    const [endRadio,setEndRadio] = useState('');



    const removeEndBlock = () => {   showEnd === 1 ? setShowEnd(0) : setShowEnd(1);  };

    const EarlyformData = { id: '',  startShift:'', startRadio:'', startValue:'', endShift:'', endRadio:'', endValue:'', endOcc:'' }

    const handleEarlyArrivalSubmit = (event:any) =>{
        event.preventDefault();
        EarlyformData.id=id
        EarlyformData.startShift=startShift
        EarlyformData.startRadio=startRadio
        EarlyformData.startValue=startValue
        EarlyformData.endShift=endShift
        EarlyformData.endRadio=endRadio
        EarlyformData.endValue=endValue
        EarlyformData.endOcc=endOcc

        alert('submitted!')
    }

    



  return (
     <div className="content"> 
     <div className="tab-header">
       <h3>Schedule Occurences Rules (Early Arrivals)</h3>
     </div>

     <form onSubmit={handleEarlyArrivalSubmit}>
       <div className="id row">
         <div className="col-md-2">
           <I2cSelect label="Occurence ID/Name" size="medium" className="occurrenc-select"  value={id} onI2cChange={(event:any) => setId(event.target.value)}>
             <I2cMenuItem value="T1 (Early Arrivals)">T1 (Early Arrivals)</I2cMenuItem>
             <I2cMenuItem value="T2 (Early Arrivals)">T2 (Early Arrivals)</I2cMenuItem>
             <I2cMenuItem value="T3 (Early Arrivals)">T3 (Early Arrivals)</I2cMenuItem>
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
           <input type="radio" id="test40" name="radio-group" value='=' onChange={(event:any) =>setStartRadio(event.target.value)}/>
           <label htmlFor="test40">=<span>Time is Equal to</span></label>
           <input type="radio" id="test41" name="radio-group" value='<' onChange={(event:any) =>setStartRadio(event.target.value)}/>
           <label htmlFor="test41">&lt;<span>Time is Less than</span></label>
           <input type="radio" id="test42" name="radio-group" value='<=' onChange={(event:any) =>setStartRadio(event.target.value)}/>
           <label htmlFor="test42"> &le; <span>Time is Less than Equal to</span></label>
           <input type="radio" id="test43" name="radio-group" value='>' onChange={(event:any) =>setStartRadio(event.target.value)}/>
           <label htmlFor="test43">&gt;<span>Time is Greater than</span></label>
           <input type="radio" id="test44" name="radio-group" value='>=' onChange={(event:any) =>setStartRadio(event.target.value)}/>
           <label htmlFor="test44">&ge;<span>Time is Greater than Equal to</span></label>
         </div>
         <div className="start-radio-input col-md-3">
           <span>min</span>
           <I2cInput label="Value" className="occurrenc-input"  value={startValue} onI2cChange={(event:any) => setStartValue(event.target.value)}/>
         </div>
       </div>
       {/* End */}
       
       <div className={ showEnd == 1 ? "late-end" : "late-end hide" } >
        <span>End</span>
         <div className="row">
           <div className="start-category col-md-2">
             <I2cSelect label="Shift Category" size="medium" className="occurrenc-select"  value={endShift} onI2cChange={(event:any) => setEndShift(event.target.value)}>
               <I2cMenuItem value="Shift Time">Shift Time</I2cMenuItem>
               <I2cMenuItem value="Shift Percentage">Shift Percentage</I2cMenuItem>
             </I2cSelect>
           </div>
           <div className="start-radio-buttons col-md-2 end">
             <input type="radio" id="test45" name="radio-group2" value='=' onChange={(event:any) =>setEndRadio(event.target.value)}/>
             <label htmlFor="test45">=<span>Time is Equal to</span></label>
             <input type="radio" id="test46" name="radio-group2" value='<' onChange={(event:any) =>setEndRadio(event.target.value)}/>
             <label htmlFor="test46">&lt;<span>Time is Less than</span></label>
             <input type="radio" id="test47" name="radio-group2" value='<=' onChange={(event:any) =>setEndRadio(event.target.value)}/>
             <label htmlFor="test47"> &le; <span>Time is Less than Equal to</span></label>
             <input type="radio" id="test48" name="radio-group2" value='>' onChange={(event:any) =>setEndRadio(event.target.value)}/>
             <label htmlFor="test48">&gt;<span>Time is Greater than</span></label>
             <input type="radio" id="test49" name="radio-group2" value='>=' onChange={(event:any) =>setEndRadio(event.target.value)}/>
             <label htmlFor="test49">&ge;<span>Time is Greater than Equal to</span></label>
           </div>
           <div className="start-radio-occurence col-md-1">
             <span>min</span>
             <I2cInput label="Value" className="occurrenc-input" value={endValue} onI2cChange={(event:any) => setEndValue(event.target.value)}/>
           </div>
           <div className="start-radio-occurence col-md-1">
             <span>pt</span>
             <I2cInput label="Occurrence" className="occurrenc-input" value={endOcc} onI2cChange={(event:any) => setEndOcc(event.target.value)}  />
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

export default EarlyArrival