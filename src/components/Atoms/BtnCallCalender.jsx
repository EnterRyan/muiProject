/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// MUI
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useFormContext } from 'react-hook-form';

// MUI datePicker
export default function BtnCallCalender({ DatePickerContextName, defaultDate }) {
  const useContext = useFormContext();
  useEffect(() => { useContext.setValue(DatePickerContextName, defaultDate); }, []);
  const handleDatePick = (newValue) => { useContext.setValue(DatePickerContextName, newValue); };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          name={DatePickerContextName}
          onChange={handleDatePick}
          format="YYYY-MM-DD"
          mask="____-__-__"
          defaultValue={defaultDate}
        />
      </DemoContainer>
    </LocalizationProvider>

  );
}

BtnCallCalender.propTypes = {
  DatePickerContextName: PropTypes.string,
  defaultDate: PropTypes.object,
};
