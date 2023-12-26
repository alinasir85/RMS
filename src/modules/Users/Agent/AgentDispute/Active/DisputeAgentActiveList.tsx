import React from 'react';
import { Edit2 } from 'iconsax-react';
import DisputeAgentActiveListChild from './AgentDisputeActive/DisputeAgentActiveListChild';

export const AgentDisputeList = (props: any) => {

    let dataSets: any;
    dataSets = props.data;

    // Edit 
    const Edit = (e: any) => {
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

    return (
        <table>
        <thead>
            <tr className='table-header'>
                <th>Ticket Number</th>
                <th>Dispute Type</th>
                <th>Start Date & Time</th>
                <th>stop Date & Time</th>
                <th>Hours</th>
                <th>Note to Supervisor/ Administrator</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {dataSets.map((dataSet: any, index: any) => {
                return (
                    <React.Fragment key={index}>
                        <tr className='parent-row' id={"parent_id" + index} data-id={index} onClick={(e) => handleClick(e)}>
                            <td> {dataSet.ticket_no}</td>
                            <td>{dataSet.dispute_type}</td>
                            <td>{dataSet.start_date}</td>
                            <td>{dataSet.stop_date}</td>
                            <td>{dataSet.hours}</td>
                            <td>{dataSet.note}</td>
                            <td><span className={"status" + dataSet.status}>{dataSet.status}</span></td>
                            <td><Edit2 size="18" color="#666666" onClick={(e) => Edit(dataSet.id)} /></td>
                        </tr>
                        
                        <tr id={"child_id" + index} data-id={index} className="hidden">
                            {dataSet.dispute_type == "Pay Period" ? <td colSpan={9}> <DisputeAgentActiveListChild week={dataSet.data} /> </td> : <></> && dataSet.dispute_type == "Week" ? <td colSpan={9}> <DisputeAgentActiveListChild week={dataSet.data} /> </td> : <></>}
                        </tr>
                    </React.Fragment>
                )
            })}
        </tbody>
    </table>
    );

}

export default AgentDisputeList;
