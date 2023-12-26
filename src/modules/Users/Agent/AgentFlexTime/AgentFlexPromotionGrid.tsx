import React, { useEffect } from 'react';

export const AgentFlexPromotionGrid = (props: any) => {
    let dataSets: any;
    dataSets = props.promotionGridData;

    useEffect(() => {

    }, [])

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
                                            <td className='component-grid-td'>
                                                <h5>Start Date & Time</h5>
                                                {dataSet.start_date}
                                            </td>
                                            <td className='component-grid-td' colSpan={2}>
                                                <h5>Stop Date & Time</h5>
                                                {dataSet.stop_date}
                                            </td>
                                        </tr>

                                        <tr className='component-grid-tr'>
                                            <td className='component-grid-td' colSpan={3}>
                                                <h5>Criteris</h5>
                                                {dataSet.criteria}
                                            </td>
                                        </tr>
                                        <tr className='component-grid-tr'>
                                            <td className='component-grid-td' colSpan={3}>
                                                <h5>Incentive Description</h5>
                                                {dataSet.description}
                                            </td>
                                        </tr>
                                        <tr className='component-grid-tr'>
                                            <td colSpan={2}> {dataSet.factor}</td>

                                            <td className='component-grid-td'>
                                                <button className={"status" + dataSet.status}>{dataSet.status}</button>
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

export default AgentFlexPromotionGrid;
