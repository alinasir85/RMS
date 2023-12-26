import { useEffect } from 'react';
import { I2cAvatar } from '@webcomponents/i2cwebcomponents/dist/react';
import { TickCircle, CloseCircle } from 'iconsax-react';

export const SupervisorDisputeGrid = (props: any) => {
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
    useEffect(() => {

    }, [])

    return (
        <>
            <div className='grid-container'>
                {dataSets.map((dataSet: any, index: any) => {
                    return (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className='component-grid'>
                                <table className='component-grid-table'>
                                    <tbody className='component-grid-tbody'>
                                        <tr className='component-grid-tr'>
                                            <td className='component-grid-td'>
                                                <I2cAvatar className="avatar" image={dataSet.image} label="Avatar" />
                                                <p style={{ display: "inline-block", marginBottom: 0, verticalAlign: "middle" }}>{dataSet.agent_name} <span style={{ display: "block" }}>{dataSet.ticket_number}</span></p>
                                            </td>
                                            <td className='component-grid-td'>
                                                <h5>Ticket Number</h5>
                                                <strong>{dataSet.ticket_number}</strong>
                                            </td>
                                            <td className='component-grid-td'>
                                                <div className='hourCalendar'>
                                                    {dataSet.hour}
                                                    <span>Hrs</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='component-grid-td'>
                                                <h5>Start Date & Time</h5>
                                                {dataSet.start_date}
                                            </td>
                                            <td className='component-grid-td' colSpan={2}>
                                                <h5>Stop Date & Time</h5>
                                                {dataSet.stop_date}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='component-grid-td' colSpan={3}>
                                                <h5>Dispute Type</h5>
                                                {dataSet.dispute_type}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='component-grid-td' colSpan={3}>
                                                <h5>Agents Notes/Comments</h5>
                                                {dataSet.comments}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='component-grid-td' colSpan={2}>
                                                <span className={"status" + dataSet.status}>{dataSet.status}</span>
                                            </td>
                                            <td>
                                                <TickCircle size="20" color="#242A41" onClick={(e) => Edit(e)} />
                                                <CloseCircle size="20" color="#242A41" onClick={(e) => Delete(e)} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );

}

export default SupervisorDisputeGrid;
