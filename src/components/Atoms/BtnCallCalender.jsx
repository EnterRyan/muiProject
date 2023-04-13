/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
// MUI
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// MUI datePicker
export default function BtnCallCalender({ handleChangeDate }) {
  const handleDatePick = (newValue) => { handleChangeDate(newValue); };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          onChange={handleDatePick}
          format="YYYY-MM-DD"
          mask="____-__-__"
        />
      </DemoContainer>
    </LocalizationProvider>

  );
}

BtnCallCalender.propTypes = {
  handleChangeDate: PropTypes.func,
};
