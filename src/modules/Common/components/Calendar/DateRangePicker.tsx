import { useState, useRef, forwardRef } from "react";
import DatePicker from 'react-datepicker';
// eslint-disable-next-line react/display-name
const CustomInput = forwardRef((props: any, ref) => {
    return <a className="CalendarLink" {...props} ref={ref}>Shift Calendar</a>;
});

export default function DateRangePicker() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState(null);


    const onChange = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    const inputRef = useRef(null);
    return (
        <div>
            <DatePicker
                className="datePicker" selected={startDate} onChange={(e: any)=>onChange(e)} startDate={startDate} endDate={endDate} selectsRange
                customInput={<CustomInput ref={inputRef} />}
            />
        </div>
    );
}