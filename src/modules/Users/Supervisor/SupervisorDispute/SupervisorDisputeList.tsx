import React, { useEffect } from 'react';
import { I2cAvatar } from '@webcomponents/i2cwebcomponents/dist/react';
import Approved from './SupervisorDisputeTables/Approved';
import Pending from './SupervisorDisputeTables/Pending';
import { Edit2, CloseCircle, ArrowCircleDown } from 'iconsax-react';

export const SupervisorDisputeList = (props: any) => {

    let dataSets: any;
    dataSets = props.data;

    // Edit 
    const Edit = (e: any) => {
        alert("Popup");
    }

    // Delete
    const Delete = (e: any) => {
        alert("Popup");
    }


    const handleClick = (e: any) => {

        let getDataId = e.currentTarget.getAttribute("data-id");
        var child_id = "child_id" + getDataId;
        if (document.getElementById(child_id)?.hasAttribute('class')) {
            document.getElementById(child_id)?.removeAttribute('class');
        }
        else {
            document.getElementById(child_id)?.setAttribute('class', 'hidden');
        }
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr className='table-header'>
                        <th>Name</th>
                        <th>Ticket Number</th>
                        <th>Dispute Type</th>
                        <th>Start Date & Time</th>
                        <th>stop Date & Time</th>
                        <th>Hours</th>
                        <th>Agent Notes/Comments</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataSets.map((dataSet: any, index: any) => {
                        return (
                            <React.Fragment key={index}>
                                <tr className='parent-row' key={dataSet.id}>
                                    <td><I2cAvatar image={dataSet.image} label="Agent Image" /> <p style={{display:"inline-block", marginBottom:0, verticalAlign:"middle"}}>{dataSet.agent_name} <span style={{display:"block"}}>{dataSet.ticket_number}</span></p></td>
                                    <td>{dataSet.ticket_number}</td>
                                    <td>{dataSet.dispute_type}</td>
                                    <td>{dataSet.start_date}</td>
                                    <td>{dataSet.stop_date}</td>
                                    <td>{dataSet.hour}</td>
                                    <td>{dataSet.comments}</td>
                                    <td><span className={"status" + dataSet.status}>{dataSet.status}</span></td>
                                    <td>
                                        <Edit2 size="18" color="#666666" onClick={(e) => Edit(dataSet.id)}/>
                                        <CloseCircle size="18" color="#666666" onClick={(e) => Delete(e)} />
                                        {dataSet.agents ? <><ArrowCircleDown className="arrowDropDown" size="18" id={"parent_id" + dataSet.id} data-id={dataSet.id} onClick={(e) => handleClick(e)} /></> : <></>}
                                    </td>
                                </tr>
                                <tr id={"child_id" + dataSet.id} data-id={dataSet.id} className="hidden">
                                    <td colSpan={9}>
                                        {dataSet.status == "Pending" ? <Pending className='child-table' agents={dataSet.agents} /> : <Approved className='child-table' agents={dataSet.agents} />}
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </table>
        </>
    );

}

export default SupervisorDisputeList;
