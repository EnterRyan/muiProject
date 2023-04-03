import { useState } from 'react';
//MUI
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//MUI datePicker
export default function BtnCallCalender() {
  const [inputDate, setInputDate] =useState(null);
  const handleChangeDate = (newValue)=>{
    setInputDate(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={inputDate} onChange={handleChangeDate} />
      </DemoContainer>
    </LocalizationProvider>

  );
}