import { Edit2 } from 'iconsax-react';

export const DisputeAgentActiveListChild = (props: any) => {

    let dataSets: any;
    dataSets = props.week;

    // Edit 
    const Edit = (e: any) => {
        alert("Popup");
    }

    return (
        <>
            <table className='table'>
                <thead>
                    <tr className='table-head'>
                        <th>Start Date & Time</th>
                        <th>End Date & Time</th>
                        <th>Hours</th>
                        <th>Notes to Supervisor/Admin</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataSets.map((dataSet: any, index: any) => {
                        return (
                            <tr key={index} className="table-data">
                                <td>{dataSet.start_date}</td>
                                <td>{dataSet.stop_date}</td>
                                <td>{dataSet.Hours}</td>
                                <td>{dataSet.note}</td>
                                <td><Edit2 size="18" color="#666666" onClick={(e) => Edit(e)} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );

}

export default DisputeAgentActiveListChild;
