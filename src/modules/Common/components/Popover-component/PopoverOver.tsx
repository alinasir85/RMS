import React, { useState } from 'react'
import { Popover } from '@mui/material'
import popoverClasses from "./PopOver.module.css";
import TimeOff from "../Dialogs/timeOff";
import DisputeModal from "../Dialogs/DisputeModal";


const PopOver = (props: any) => {

    const [openRequestModal, setOpenRequestModal] = useState(false);
    const [openDisputeModal, setOpenDisputeModal] = useState(false);
    const openRequestModalHandler = () => {
        setOpenRequestModal(true);
        props.closePopover();
    }
    const closeRequestModal = (value: boolean) => {
        setOpenRequestModal(value);
    }
    const openDisputeModalHandler = () => {
        setOpenDisputeModal(true);
        props.closePopover();
    }
    const closeDisputeModal = (value: boolean) => {
        setOpenDisputeModal(value);
    }

    return (
        <React.Fragment>
            <Popover
                open={props.openPopover} anchorEl={props.anchorEl} onClose={props.closePopover}
                anchorOrigin={props.anchorOrigin}
                transformOrigin={props.transformOrigin}
            >
                <div className={`${popoverClasses['popover-custom']} text-left pb-0`}>
                    <ul className={popoverClasses['shift-details']}>
                        <li className="pt-0 pe-0 ps-0">
                            <div className={popoverClasses['popover-custom-header']}>
                                <h3 className="mb-2"><i className="icon-clock d-inline-block me-1 icon"></i> Shift Schedule</h3>
                                <div className={popoverClasses['scheduled-shift-time']}>
                                    <span className={popoverClasses['scheduled-shift-time-label']}></span> <span className={popoverClasses['font-w-500']}>{props?.popUpData?.timeDetails?.popupScheduleDate}</span>
                                </div>
                                <div className={`${popoverClasses['text-blue']} ${popoverClasses['available-shift-time']}`}>
                                    <span className={popoverClasses['scheduled-shift-time-label']}></span><span className="font-w-500"> {props?.popUpData?.timeDetails?.popupAvailableDate}</span>
                                </div>
                            </div>
                        </li>
                        <li className="d-flex justify-content-between">
                            <span>Call Time</span>
                            <span className={popoverClasses['shift-item-value']}>{props?.popUpData?.timeDetails?.callTime}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                            <span>Training Time</span>
                            <span className={popoverClasses['shift-item-value']}>{props?.popUpData?.timeDetails?.trainingTime}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                            <span>Ticket Management</span>
                            <span className={popoverClasses['shift-item-value']}>{props?.popUpData?.timeDetails?.ticketManagement}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                            <span>Case Management</span>
                            <span className={popoverClasses['shift-item-value']}>{props?.popUpData?.timeDetails?.caseManagement}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                            <span>QA Time</span>
                            <span className={popoverClasses['shift-item-value']}>{props?.popUpData?.timeDetails?.qaTime}</span>
                        </li>

                        <li className="d-flex justify-content-between">
                            <span>Request Time Off</span>
                            <span className={popoverClasses['shift-item-value']}>
                            <button className={popoverClasses['text-red']} onClick={openRequestModalHandler} >Apply for Approval</button></span>
                        </li>
                    </ul>
                    <div className={popoverClasses.note}>
                        An occurrence is point deductions documented as an absence, tardy or missed time clock in/out.
                    </div>
                    <div className={popoverClasses['custom-popover-footer']}>
                        <div>
                            <span className="icon icon-clock me-1"></span>
                            <button className={popoverClasses['text-red']} onClick={openDisputeModalHandler} >Mark as Dispute</button>
                        </div>
                        <div>
                            <span className="icon icon-calculator-2 me-1"></span>
                            <a href="src/modules/Common/components/Popover-component/PopoverOver#">Hours Calculator</a>
                        </div>
                    </div>
                </div>
            </Popover>
            <TimeOff title='Request Time Off' openModal={openRequestModal} closeModal={closeRequestModal} />
            <DisputeModal title='Dispute Request' openModal={openDisputeModal} closeModal={closeDisputeModal} />
        </React.Fragment>

    );
}

export default PopOver