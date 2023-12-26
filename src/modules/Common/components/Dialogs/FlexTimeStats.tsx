import { useState } from 'react';
import { I2cButton, I2cDialog, I2cBadge} from '@webcomponents/i2cwebcomponents/dist/react';
import Link from "next/link";

function FlexTimeStats(props: any, { id, title }: PopupDetails) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <I2cDialog className='flex-dialog' label="Flex Time" open={open} onI2cAfterHide={() => setOpen(false)}>
              <div className="row m-tb">
                    <div className="col-70" ><strong>Scheduled Shift</strong> March 2021</div>
                    <div className="col-30" style={{textAlign:"right"}}> <Link href="/flex-time" style={{color:"#666666"}} >View All</Link></div>
                </div>

                <div className="row m-tb flex-detail">
                    <div className="col-70" > Monday 21 March (8:00 AM - 1:00 PM) <p>Paid Time Off</p></div>
                    <div className="col-30" style={{textAlign:"right"}}> <I2cBadge className="pending" variant="primary" >Pending</I2cBadge></div>
                </div>

                <div className="row m-tb" style={{border:"1px solid #eee",padding:"20px"}}>
                    <div className="col-70" >Tuesday 14 March <p>Sick Leave</p></div>
                    <div className="col-30" style={{textAlign:"right"}}> <I2cBadge className="approved" variant="success">Approved</I2cBadge></div>
                </div>

                <div className="row m-tb" style={{border:"1px solid #eee",padding:"20px"}}>
                    <div className="col-70" > Friday 04 March (4:00 PM - 6:00 PM) <p>Unpaid Time Off</p></div>
                    <div className="col-30" style={{textAlign:"right"}}> <I2cBadge className="rejected" >Rejected</I2cBadge></div>
                </div>

                <div className="row m-tb" style={{border:"1px solid #eee",padding:"20px"}}>
                    <div className="col-70" > Tuesday 01 March (6:00 PM - 7:00 PM) <p>Unpaid Time Off</p></div>
                    <div className="col-30" style={{textAlign:"right"}}> <I2cBadge className="approved" variant="success">Approved</I2cBadge></div>
                </div>


                <I2cButton size="large" slot="footer" onClick={() => setOpen(false)}>Close</I2cButton>
            </I2cDialog>

            <I2cButton className="button-default" size="medium" onClick={() => setOpen(true)}>{props.btnText}</I2cButton>
        </>
    );

}

export default FlexTimeStats;


interface PopupDetails {
    id: number,
    title: string,
    open: Boolean,
    onI2cAfterHide: (active: boolean) => void,
    setOpen: (active: boolean) => void
}
