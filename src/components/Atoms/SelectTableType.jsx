import React, { useState } from 'react';
// MUI
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';

/** *
 * 테이블 유형 선택 컴포넌트.
 * total : 전체유형
 * contract : 계약,
 * support : 기술지원,
 * issue : 이슈.
 */
export default function SelectTableType() {
  const [tableType, setTableType] = useState('total');
  const handleTalbeType = (e) => { setTableType(e.target.value); };
  return (
    <FormControl fullWidth>
      <InputLabel id="tableSelectlabel">유형</InputLabel>
      <Select
        labelId="tableSelectlabel"
        id="tableSelectType"
        value={tableType}
        label="tableType"
        onChange={handleTalbeType}
      >
        <MenuItem value="total">전체</MenuItem>
        <MenuItem value="contract">계약</MenuItem>
        <MenuItem value="support">기술지원</MenuItem>
        <MenuItem value="issue">이슈처리</MenuItem>
      </Select>
    </FormControl>
  );
}
