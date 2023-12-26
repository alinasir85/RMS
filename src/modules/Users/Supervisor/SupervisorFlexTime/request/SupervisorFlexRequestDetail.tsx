import { TickCircle, CloseCircle } from 'iconsax-react';
import {I2cButton, I2cDropdown, I2cMenu, I2cMenuItem} from '@webcomponents/i2cwebcomponents/dist/react';
import Image from 'next/image';

export const SupervisorFlexRequestDetail = (props: any) => {

    let dataSets: any;
    dataSets = props.agents;

    // Edit 
    const Edit = (e: any) => {
        alert("alert");
    }

    // Edit 
    const Delete = (e: any) => {
        alert("alert");
    }

    return (
        <div className='RequestTable'>
            <table>
                <thead>
                    <tr className='first-header-group'>
                        <th colSpan={2}>User</th>
                        <th colSpan={2}>Reqgular Shift Time</th>
                        <th colSpan={2}>Agent&apos;s Flex Time</th>
                        <th style={{ background: "#FBFBFB" }} rowSpan={2}>Status</th>
                        <th style={{ background: "#FBFBFB" }} rowSpan={2}>Actions
                            <I2cDropdown>
                                <I2cButton slot="trigger">...</I2cButton>
                                <I2cMenu>
                                    <I2cMenuItem>Approve All</I2cMenuItem>
                                    <I2cMenuItem>Reject All</I2cMenuItem>
                                </I2cMenu>
                            </I2cDropdown>
                        </th>
                    </tr>
                    <tr className='second-header-group'>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Start Time</td>
                        <td>stop Time</td>
                        <td>Start Time</td>
                        <td>stop Time</td>
                    </tr>
                </thead>
                <tbody>
                    {dataSets.map((dataSet: any, index: any) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {dataSet.availibility === 'Available' ? <div className="tooltip">
                                        <div className="tooltiptext"> <span className='status online'></span> Available</div>
                                        <Image src={dataSet.image} alt="Agent Image" /> <p style={{display:"inline-block", marginBottom:0, verticalAlign:"middle"}}>{dataSet.agent_name} <span style={{display:"block"}}>{dataSet.ticket_number}</span></p>
                                    </div> : <><Image src={dataSet.image} alt="Agent Image" /> <p style={{display:"inline-block", marginBottom:0, verticalAlign:"middle"}}>{dataSet.agent_name} <span style={{display:"block"}}>{dataSet.ticket_number}</span></p></>}
                                </td>
                                <td>{dataSet.location}</td>
                                <td>{dataSet.start_date}</td>
                                <td>{dataSet.stop_date}</td>
                                <td>{dataSet.flex_start_date}</td>
                                <td>{dataSet.flex_stop_date}</td>
                                <td><span className={"status" + dataSet.status}>{dataSet.status}</span></td>
                                <td>
                                    <div className="tooltip">
                                        <div className="tooltiptext">Approve</div>
                                        <TickCircle size="18" color="#666666" onClick={(e) => Edit(e)} />
                                    </div>

                                    <div className="tooltip">
                                        <div className="tooltiptext">Reject</div>
                                        <CloseCircle size="18" color="#666666" onClick={(e) => Delete(e)} />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default SupervisorFlexRequestDetail;
