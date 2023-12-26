import React, {useRef, useState} from 'react';
import {I2cButton, I2cTextarea} from '@webcomponents/i2cwebcomponents/dist/react';
import "react-datepicker/dist/react-datepicker.css";
import DateSelector from '../Calendar/DateSelector';
import {TimeSelector} from '../Calendar/TimeSelector';
import {Dialog, DialogTitle, SelectChangeEvent} from '@mui/material';
import DropdownSelector from "../Dropdown-Selector/DropdownSelector";
import axios from "../../configs/custom-axios";

function TimeOff(props: any, { id, title }: PopupDetails) {

    const [startDate, setStartDate] = useState<any>(null);
    const [endDate, setEndDate] = useState<any>(null);
    const [requestType, setRequestType] = useState('');
    const [leaveType, setLeaveType] = useState('');
    const [startTime, setStartTime] = useState<any>('');
    const [endTime, setEndTime] = useState<any>('');
    const [availablePtoBalance, setAvailablePtoBalance] = useState<any>('14h 30m');
    const [requestedPto, setRequestedPto] = useState<any>('9h 30m');
    const [errorMessage, setErrorMessage] = useState('');
    const comments = useRef<HTMLInputElement>();
    const status = 1;
    const REQUEST_TYPES : { [key: string]: any } = {
        "PTO (Paid Time Off)" : 0,
        "Unpaid Time Off" : 1
    }
    const LEAVES_TYPES : { [key: string]: any } = {
        "Sick Leave" : 0,
        "Casual Leave" : 1,
        "Short Leave" : 2,
        "Annual Leave" : 3,
    }

    function handleSubmit(event: any) {
        if(requestType && leaveType && startDate && endDate && startTime && endTime && comments){
            if(startDate>endDate){
                setErrorMessage("Invalid Date Selected");
            }
            else{
                const requestObj = {
                    agentId : "0",
                    requestType : REQUEST_TYPES[requestType],
                    leaveType : LEAVES_TYPES[leaveType],
                    fromDate : startDate["$d"],
                    toDate : endDate["$d"],
                    startTime : startTime["$H"]+":"+startTime["$m"],
                    endTime : endTime["$H"]+":"+endTime["$m"],
                    comment : comments?.current?.value,
                    status : status,
                    createdBy : "Me"
                }
                axios.post("/quickStats/leaveRequest", requestObj).then((resp)=>{
                    console.log(resp.data);
                })
                closeModalHandler();
            }
        }
        else{
            setErrorMessage("Please fill all the fields");
        }
        event.preventDefault();
    }
    function startDateChangeHandler(value:any) {
        setStartDate(value);
    }

    function endDateChangeHandler(value:any) {
        setEndDate(value);
    }

    const requestTypeChangeHandler = (event: SelectChangeEvent) => {
        setRequestType(event.target.value);
    };
    const leaveTypeChangeHandler = (event: SelectChangeEvent) => {
        setLeaveType(event.target.value);
    };

    const closeModalHandler = () => {
        setErrorMessage("");
        props.closeModal(false);
    }

    return (
        <>
            <Dialog className="timeoff-dialog" open={props.openModal} onClose={closeModalHandler}>
                <DialogTitle className='timeoff-dialog-heading'>{props.title}</DialogTitle>
                <div className='row m-0'>
                    {  props.isStatsView ?
                        <div className='badge-strip d-flex'>
                            <span className='flex-grow-1'>Available PTO Balance</span>
                            <span className='flex-shrink-0'>{availablePtoBalance}</span>
                        </div>
                        :
                        <div className='timeoff-dialog-subheading'>
                            Your employer requires 7 days advance notice for time off requests (except sick time).
                        </div>
                    }
                </div>

                <form>
                    <div className='row'>
                        <p>
                            {
                                errorMessage?(<div className={"alert alert-danger w-100"}>{errorMessage}</div>):null
                            }
                        </p>
                        <div className='col-6 mb-3'>
                            <DropdownSelector className='w-100' dropdownId="request-type" onChange={requestTypeChangeHandler} label="Request Type" dropdownValues= {['PTO (Paid Time Off)', 'Unpaid Time Off']} />
                        </div>
                        <div className='col-6 mb-3'>
                            { props.isStatsView &&
                                <DropdownSelector className='w-100' dropdownId="leave-type" onChange={leaveTypeChangeHandler} label="Leave Type" dropdownValues= {['Sick Leave','Casual Leave', 'Short Leave', 'Annual Leave']} />
                            }
                        </div>
                        <div className='col-6 mb-3'>
                            <DateSelector className='w-100' text='From Date'  value={startDate} onChange={startDateChangeHandler} />
                        </div>
                        <div className='col-6 mb-3'>
                            <DateSelector className='w-100' text='To Date' value={endDate} onChange={endDateChangeHandler} />
                        </div>
                        <div className='col-6 mb-3'>
                            <TimeSelector className='w-100' label={'Start Time'} onChange={setStartTime}/>
                        </div>
                        <div className='col-6 mb-3'>
                            <TimeSelector className='w-100' label={'End Time'} onChange={setEndTime}/>
                        </div>
                    </div>
                    { props.isStatsView &&
                        <div className='row m-0'>
                            <div className='primary-badge d-flex'>
                                <span className='flex-grow-1'>Total PTO Requested</span>
                                <span className='flex-shrink-0'>{requestedPto}</span>
                            </div>
                        </div>
                    }
                    <I2cTextarea className='text-area' resize="none" size='small' rows={1} name="comment" ref={comments} label="Note to Manager/Administrator" required></I2cTextarea>
                </form>

                <div className='footer text-center'>
                    <I2cButton className='me-4' size="large" onClick={closeModalHandler}>Cancel</I2cButton>
                    <I2cButton variant="primary" size="large" onClick={(event)=>handleSubmit(event)}>Submit for Approval</I2cButton>
                </div>

            </Dialog>
        </>
    );

}

export default TimeOff;


interface PopupDetails {
    id: number,
    title: string,
    open: Boolean,
    onI2cAfterHide: (active: boolean) => void,
    setOpen: (active: boolean) => void
}
