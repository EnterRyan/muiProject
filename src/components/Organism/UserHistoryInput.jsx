/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
// MUI
import Box from '@mui/material/Box';
import { useForm, FormProvider } from 'react-hook-form';
// Atomic Component
import Editor from '../Molecule/Editor';
import DialogHeader from '../Molecule/DialogHeader';
import BtnSubmit from '../Atoms/BtnSubmit';
// api
import PostData from '../../Utils/PostData';
import XSSFilter from '../../Utils/XSSFilter';
import API from '../../Utils/config';

/** Props
 *  DEFAULT_VALUE   : 추가 일경우 ProjectCode 제외 전부 기본값으로 설정.
 *                    수정일 경우 받은 값들을 기본으로 가져와서 수정된 내용이 submit으로 전송됨.(histId를 식별자로)
 */
const defaultBefore = {
  ProjectCode: 'M-102-B333', // TEST용 하드코딩임ㅋ
  histId: undefined,
  inputDate: dayjs(),
  tableType: 'select',
  textValue: undefined,
};
/** DialogHeader, Editor, submitbitton 구성
*   TODO List
*   1) DataPicker 날짜를 DB에 저장할때도 YYYY-MM-DD 형태로 저장해야됨.(같은날 우선순위 까지 고려)
*   2) 테이블 타입선택하지 않았을 경우 Alert이 발생하도록 Alert 컴포넌트 추가필요.
*/
export default function UserHistoryInput({ DEFAULT_VALUE = defaultBefore }) {
  const methods = useForm();
  const API_URL = DEFAULT_VALUE.histId === undefined ? API.ADDHIST : API.LOGIN;

  useEffect(() => {
    methods.setValue('ProjectCode', DEFAULT_VALUE.ProjectCode);
    methods.setValue('histId', DEFAULT_VALUE.histId);
  });

  const postSubmit = (data) => {
    if (data.TableTypeSelector === 'select') {
      // TODO : toast popup으로 테이블 유형 선택 유도.
      console.log('select exception');
      return;
    }
    const filHtmldata = XSSFilter(data.EditorText);
    methods.setValue('EditorText', filHtmldata);
    PostData(API_URL, data);
  };

  return (
    <Box sx={{ marginTop: 1, width: '700px', position: 'relative' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(postSubmit)}>
          <DialogHeader DatePickerContextName="DatePicker" TableTypeContextName="TableTypeSelector" DEFAULT_VALUE={DEFAULT_VALUE} />
          <Editor EditorContextName="EditorText" defaultText={DEFAULT_VALUE.textValue} />
          <BtnSubmit />
        </form>
      </FormProvider>
    </Box>
  );
}

UserHistoryInput.propTypes = {
  DEFAULT_VALUE: PropTypes.shape({
    // eslint-disable-next-line react/no-typos
    inputDate: PropTypes.Object,
    tableType: PropTypes.string,
    textValue: PropTypes.string,
  }),
};
