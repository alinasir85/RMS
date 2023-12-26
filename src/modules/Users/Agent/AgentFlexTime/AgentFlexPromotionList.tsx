import React, { useEffect } from 'react';

export const AgentFlexPromotionList = (props: any) => {

  let dataSets: any;
  dataSets = props.promotionData;

  return (
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
                <td>{dataSet.status=="optin" ? <button className={"status" + dataSet.status}>{dataSet.status}</button>: <span className={"status" + dataSet.status}>{dataSet.status}</span>}</td>
              </tr>
            </React.Fragment>
          )
        })}
      </tbody>
    </table>
  );

}

export default AgentFlexPromotionList;
