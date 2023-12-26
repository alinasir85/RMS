import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateSelector(props:any) {

    const [value, setValue] = React.useState(null);

    function onChangeHandler(date:any) {
        props.onChange(date);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label={props.text}
          value={props.value}
          onChange={onChangeHandler}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );

}