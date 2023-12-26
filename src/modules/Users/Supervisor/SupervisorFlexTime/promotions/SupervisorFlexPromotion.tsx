import React from 'react';
import { Edit2 } from 'iconsax-react';

export const SupervisorFlexPromotion = (props: any) => {

  let dataSets: any;
  dataSets = props.promotionData;

  // Edit 
  const Edit = (e: any) => {
    alert("Popup");
  }

  return (
    <div className='SupervisorFlexPromotion'>
      <table>
        <thead>
          <tr className='table-header'>
            <th>Start Date & Time</th>
            <th>stop Date & Time</th>
            <th>Criteria</th>
            <th>Factor</th>
            <th>Amount</th>
            <th>Incentive Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataSets.map((dataSet: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <tr>
                  <td>{dataSet.start_date}</td>
                  <td>{dataSet.stop_date}</td>
                  <td>{dataSet.criteria}</td>
                  <td>{dataSet.factor}</td>
                  <td>{dataSet.Amount}</td>
                  <td>{dataSet.description}</td>
                  <td><Edit2 size="18" color="#666666" onClick={(e) => Edit(dataSet.id)} /></td>
                </tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  );

}

export default SupervisorFlexPromotion;
