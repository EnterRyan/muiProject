/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// MUI
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';

/** *
 * 테이블 유형 선택 컴포넌트.
 * total : 전체유형
 * contract : 계약,
 * support : 기술지원,
 * issue : 이슈.
 */
// eslint-disable-next-line react/prop-types
export default function SelectTableType({ TableTypeContextName }) {
  const useContext = useFormContext();
  // eslint-disable-next-line no-unused-vars
  const [inputDate, setInputDate] = useState('total');
  const getTableType = (e) => {
    setInputDate(e.target.value);
    useContext.setValue(TableTypeContextName, e.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="tableSelectlabel">유형</InputLabel>
      <Select
        name={TableTypeContextName}
        labelId="tableSelectlabel"
        id="tableSelectType"
        value={inputDate}
        label="tableType"
        onChange={getTableType}
      >
        <MenuItem value="total">전체</MenuItem>
        <MenuItem value="contract">계약</MenuItem>
        <MenuItem value="support">기술지원</MenuItem>
        <MenuItem value="issue">이슈처리</MenuItem>
      </Select>
    </FormControl>
  );
}

SelectTableType.propTypes = {
  TableTypeContextName: PropTypes.string,
};
