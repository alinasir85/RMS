import React, { useEffect } from 'react';
import { MessageEdit } from 'iconsax-react';

export const SupervisorFlexPromotionGrid = (props: any) => {
    let dataSets: any;
    dataSets = props.promotionGridData;

    // Edit 
    const Edit = (e: any) => {
        alert("Popup");
    }
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

                                        <tr>
                                            <td className='component-grid-td' colSpan={3}>
                                                <h5>Criteria</h5>
                                                {dataSet.criteria}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='component-grid-td' colSpan={3}>
                                                <h5>Incentive Description</h5>
                                                {dataSet.description}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='component-grid-td' colSpan={2}>
                                                <span>{dataSet.factor} Factor</span>
                                                <span>{dataSet.Amount} Amount</span>
                                            </td>

                                            <td><MessageEdit size="18" color="#666666" onClick={(e) => Edit(e)} /></td>
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

export default SupervisorFlexPromotionGrid;
