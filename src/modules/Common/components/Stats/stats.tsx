import {I2cButton, I2cCard} from '@webcomponents/i2cwebcomponents/dist/react';
import {Buildings2, Calendar, Clock, CloseCircle, DocumentText, Location, TickCircle} from 'iconsax-react';
import {useEffect, useState} from 'react';
import HoursCalculator from "../Dialogs/hoursCalculator";
import DateRangePicker from "../Calendar/DateRangePicker";
import TimeOff from "../Dialogs/timeOff";
import FlexTimeStats from "../Dialogs/FlexTimeStats";
import RequestList from "../Dialogs/RequestList";
import axios from "../../configs/custom-axios";

function Stats() {

    const [openRequestModal, setOpenRequestModal] = useState(false);
    const closeRequestModal = (value: boolean) => {
        setOpenRequestModal(value);
    }
    const [quickStatsData, setQuickStatsData] = useState({
        shiftStartDate: "",
        shiftEndDate: "",
        shiftStartTime: "",
        shiftEndTime: "",
        ptoBalance: "",
        officeLocation: "",
        latestFlexDuration: "",
        latestFlexStartDate: "",
        latestFlexEndDate: "",
        latestFlexFactor: "",
        approvedRequests: "",
        pendingRequests: ""
    });



    useEffect(() => {
        axios.post('/quick/stats')
            .then(resp=> {
                console.log(resp.data)
                setQuickStatsData(resp.data.body);
            }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div className='stats'>
            <div className='component-container'>
                <div className='component-header'>
                    <div className='col-md-8'>
                        <h2>Quick Stats</h2>
                        <p>Scheduled Shift: {quickStatsData?.shiftStartDate} - {quickStatsData?.shiftEndDate}  <span > <DateRangePicker /> </span> </p>
                    </div>
                    <div className='col-md-4 text-right'>
                        <HoursCalculator title={'Hours Calculator'} btnText={'Hours Calculator'} />
                    </div>
                </div>

                <div className='stats-cards'>
                    <div className="col-md-3">
                        <I2cCard className="card-basic">
                            <Calendar size="25" className='mb-3' />
                            <p> Shift Time</p>
                            <p>{quickStatsData?.shiftStartTime} to {quickStatsData?.shiftEndTime}</p>
                            <span> <Location size="18" color="#46B0E6" />{quickStatsData?.officeLocation}</span>
                        </I2cCard>
                    </div>

                    <div className="col-md-3">
                        <I2cCard className="card-basic">
                            <Clock size="25" className='mb-3' />
                            <p>Request Time Off (Paid/Unpaid)</p>
                            <p>PTO Balance - {quickStatsData?.ptoBalance}</p>
                            <I2cButton className="button-default" onClick={() => { setOpenRequestModal(true) }}>Request</I2cButton>
                            <TimeOff title='Request Time Off (Paid/Unpaid)' openModal={openRequestModal} isStatsView={true} closeModal={closeRequestModal} />
                        </I2cCard>
                    </div>

                    <div className="col-md-3">
                        <I2cCard className="card-basic">
                            <DocumentText size="25" className='mb-3' />
                            <p>Flex Time ({quickStatsData?.latestFlexDuration} hrs)</p>
                            <p>{quickStatsData?.latestFlexStartDate} to {quickStatsData?.latestFlexEndDate}</p>
                            <p>Factor ({quickStatsData?.latestFlexFactor}x)</p>
                            <FlexTimeStats title={'Request'} btnText={'Request'} />
                        </I2cCard>
                    </div>

                    <div className="col-md-3">
                        <I2cCard className="card-basic">
                            <Buildings2 size="25" className='mb-3' />
                            <p> Requests</p>
                            <p><TickCircle size="18" color="#03C04A" />{quickStatsData?.approvedRequests > "1" ? `${quickStatsData?.approvedRequests}  Leaves ` : `${quickStatsData?.approvedRequests} Leave `}Approved</p>
                            <p><CloseCircle size="18" color="#EE4723" />{quickStatsData?.pendingRequests} Pending Approvals</p>
                            <RequestList title={'Request'} btnText={'Request'} />
                        </I2cCard>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Stats;


