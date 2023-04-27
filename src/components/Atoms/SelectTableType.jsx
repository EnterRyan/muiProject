/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// MUI
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';

/** *
 * 테이블 유형 선택 컴포넌트.
 * total    : 전체유형 => ( 입력일때는 나오지않게. )
 * select   : 유형선택 => ( 입력단계때는 테이블을 꼭 선택하게 유도하는 작업필요.)
 * contract : 계약,
 * support  : 기술지원,
 * issue    : 이슈.
 */
export default function SelectTableType({ TableTypeContextName, defaultTableType, UseType }) {
  const useContext = useFormContext();
  const [tableType, setTableType] = useState(defaultTableType);

  // 초기 Props로 전달받은 defaultValue 설정 부분. 최초 랜더링시에만 동작으로 의존성 필요없음.
  useEffect(() => { useContext.setValue(TableTypeContextName, tableType); }, []);

  const getTableType = (e) => {
    setTableType(e.target.value);
    useContext.setValue(TableTypeContextName, e.target.value);
    console.log(useContext.getValues(TableTypeContextName));
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="tableSelectlabel">유형</InputLabel>
      <Select
        name={TableTypeContextName}
        labelId="tableSelectlabel"
        id="tableSelectType"
        value={tableType}
        label="tableType"
        onChange={getTableType}
      >
        {UseType !== 'add' ? <MenuItem value="total">전체</MenuItem> : <MenuItem value="select">유형선택</MenuItem>}
        <MenuItem value="contract">계약사항</MenuItem>
        <MenuItem value="support">기술지원</MenuItem>
        <MenuItem value="issue">이슈처리</MenuItem>
      </Select>
    </FormControl>
  );
}

SelectTableType.propTypes = {
  TableTypeContextName: PropTypes.string,
  defaultTableType: PropTypes.string,
  UseType: PropTypes.string,
};
