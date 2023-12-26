import { useState } from 'react';
import { I2cButton, I2cDialog } from '@webcomponents/i2cwebcomponents/dist/react';
import { Calendar } from 'iconsax-react';

function HoursCalculator(props: any, { id, title }: PopupDetails) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='hoursCalculatorPopup'>
                <I2cDialog className="dialog" open={open} onI2cAfterHide={() => setOpen(false)}>
                <Calendar />
                    <h3>Hours Calculator</h3> 
                    <p>This Feature is not available yet.</p>
                    <I2cButton slot="footer" onClick={() => setOpen(false)}>Close</I2cButton>
                </I2cDialog>
                
                <I2cButton className="button-default" size="large" onClick={() => setOpen(true)}>Hours Calculator</I2cButton>
            </div>
        </>
    );

}

export default HoursCalculator;


interface PopupDetails {
    id: number,
    title: string,
    onI2cAfterHide: (active: boolean) => void,
    setOpen: (active: boolean) => void
}
