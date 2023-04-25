/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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

/* DialogHeader, Editor, submitbitton 구성
*  React-hook-form의 Controller를 사용해봤으나 하위 컴포넌트가 의존성이 너무 강해져서 useFormContext로 변경.
*  ContextAPI를 좀 알아야 useFormContext의 동작을 이해할듯.(re-rendering 문제를 체크해보자.)
*/

/** Props로 전달받아야 하는 것.
 *  1) POST_TARGET     : 열람 테이블 유형(유지보수,프로젝트), 유형(신규,수정)
 *  2) DEFAULT_VALUE   : 내용 수정일 경우 Props로 해당 컴포넌트의 내용, 시간, 테이블 유형을 가져옴.
 *                       추가일 경우에는 디폴트 파라미터로 undefined 처리.
 */
const defaultBefore = {
  inputDate: dayjs(),
  tableType: 'select',
  textValue: undefined,
};
export default function UserHistoryInput({ POST_TARGET = '/addhist', DEFAULT_VALUE = defaultBefore }) {
  const methods = useForm();

  // toast popup으로 테이블 유형 선택 유도.
  const postSubmit = (data) => {
    if (data.TableTypeSelector === 'select') { return; }
    const filHtmldata = XSSFilter(data.EditorText);
    methods.setValue('EditorText', filHtmldata);
    PostData(POST_TARGET, data);
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
  POST_TARGET: PropTypes.string,
  DEFAULT_VALUE: PropTypes.shape({
    // eslint-disable-next-line react/no-typos
    inputDate: PropTypes.Object,
    tableType: PropTypes.string,
    textValue: PropTypes.string,
  }),
};
