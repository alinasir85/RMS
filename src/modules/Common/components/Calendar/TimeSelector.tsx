import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {SelectChangeEvent} from "@mui/material";



export const TimeSelector = (props:any) => {


    const [value, setValue] = React.useState<Date | null>(null);

    const selectChangeHandler = (event: any) => {
        props.onChange(event.target.value);
        setValue(event.target.value);
    };

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    label={props.label}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                        props.onChange(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </>
    );

}


