import React from 'react';

export const RequestTimeOffGrid = (props: any) => {
    let dataSets: any;
    dataSets = props.requestDataGrid;

    return (
        <div className='grid-container'>
            {dataSets.map((dataSet: any, index: any) => {
                return (
                    <React.Fragment key={index}>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" >
                            <div className='component-grid'>
                                <table className='component-grid-table'>
                                    <tbody className='component-grid-tbody'>
                                        <tr className='component-grid-tr'>
                                            <td className='component-grid-td ps-0'>
                                                <h5>Request Type</h5>
                                                {dataSet.Request_type}
                                            </td>
                                            <td className='component-grid-td'>
                                                <h5>Leave Type</h5>
                                                {dataSet.Leave_type}
                                            </td>
                                            <td className='component-grid-td text-end pe-0'>
                                                <div className='hourCalendar d-inline-block w-75'>
                                                    {dataSet.Hours}
                                                    <span>Hrs</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className='component-grid-tr'>
                                            <td className='component-grid-td ps-0'>
                                                <h5>Start Date &amp; Time</h5>
                                                {dataSet.start_date}
                                            </td>
                                            <td className='component-grid-td pe-0' colSpan={2}>
                                                <h5>Stop Date &amp; Time</h5>
                                                {dataSet.stop_date}
                                            </td>
                                        </tr>
                                        <tr className='component-grid-tr'>
                                            <td className='component-grid-td ps-0' colSpan={2}>
                                                <h5>Note to Manager/Administrator</h5>
                                                {dataSet.note}
                                            </td>
                                            <td className='component-grid-td text-end pe-0'>
                                                <span className={"status-badge status" + dataSet.status}>{dataSet.status}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    );

}

export default RequestTimeOffGrid;
