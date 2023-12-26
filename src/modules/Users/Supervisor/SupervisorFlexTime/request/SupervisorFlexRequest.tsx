import React from 'react';
import SupervisorFlexRequestDetail from './SupervisorFlexRequestDetail';
import Image from 'next/image';

export const SupervisorFlexRequest = (props: any) => {

    let dataSets: any;
    dataSets = props.requestData;

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
        <table className='request-table'>
            <thead>
                <tr className='table-header'>
                    <th>ID</th>
                    <th>Request From</th>
                    <th>Start Date & Time</th>
                    <th>stop Date & Time</th>
                    <th>Criteria</th>
                    <th>Factor</th>
                    <th>Amount</th>
                    <th>Incentive Description</th>
                </tr>
            </thead>
            <tbody>
                {dataSets.map((dataSet: any, index: any) => {
                    return (
                        <React.Fragment key={index}>
                            <tr className="parent-row" id={"parent_id" + dataSet.id} data-id={dataSet.id} onClick={(e) => handleClick(e)}>
                                <td> {dataSet.id}</td>
                                <td>{dataSet.agents.length <= 3 ? <ul className='requestAgent'>
                                    {dataSet.agents.map((agent: any, i: any) => {
                                        return (
                                            <li key={i}>
                                                {agent.availibility === 'Available' ? <div className="tooltip">
                                                    <div className="tooltiptext"> <span className='status online'></span> Available</div>
                                                    <Image key={i} style={{ borderRadius: 50, background: "#eee", width: 40 }} src={agent.image} alt="Agent Image" />
                                                </div> : <Image key={i} style={{ borderRadius: 50, background: "#eee", width: 40 }} src={agent.image} alt="Agent Image" />}
                                            </li>
                                        )
                                    })}
                                </ul> : <>
                                    <ul className='requestAgent list-style'>
                                        {dataSet.agents.map((agent: any, i: any) => {
                                            return (
                                                <li key={i}>

                                                    {agent.status ? <div className="tooltip">
                                                        <div className="tooltiptext"> <span className='status online'></span> Available</div>
                                                        <Image key={i} style={{ borderRadius: 50, background: "#eee", width: 40 }} src={agent.image} alt="Agent Image" />
                                                    </div> : <Image key={i} style={{ borderRadius: 50, background: "#eee", width: 40 }} src={agent.image} alt="Agent Image" />}
                                                </li>
                                            )
                                        })}
                                        <li><span>+{dataSet.agents.length - 3}</span></li>
                                    </ul>
                                </>}</td>
                                <td>{dataSet.start_date}</td>
                                <td>{dataSet.stop_date}</td>
                                <td>{dataSet.criteria}</td>
                                <td>{dataSet.factor}</td>
                                <td>{dataSet.Amount}</td>
                                <td>{dataSet.description}</td>
                            </tr>
                            <tr id={"child_id" + dataSet.id} data-id={dataSet.id} className="hidden">
                                <td colSpan={9}>
                                    <SupervisorFlexRequestDetail agents={dataSet.agents} />
                                </td>
                            </tr>
                        </React.Fragment>
                    )
                })}
            </tbody>
        </table>
    );

}

export default SupervisorFlexRequest;
