/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// MUI
import Box from '@mui/material/Box';
import { useForm, Controller, FormProvider } from 'react-hook-form';
// Atomic Component
import Editor from '../Molecule/Editor';
import DialogHeader from '../Molecule/DialogHeader';
import BtnSubmit from '../Atoms/BtnSubmit';
// api
import PostData from '../../Utils/PostData';

/* DialogHeader, Editor, submitbitton 구성
*  React-hook-form의 Controller를 사용해봤으나 하위 컴포넌트가 의존성이 너무 강해져서 useFormContext로 변경.
*  ContextAPI를 좀 알아야 useFormContext의 동작을 이해할듯.(re-rendering 문제를 체크해보자.)
*/

/** Props로 전달받아야 하는 것.
 *  1)POSTtarget : 열람 테이블 유형(유지보수,프로젝트), 유형(신규,수정)
 */
const testTraget = 'addhist'; // 나중에는 Props로 받은예정.
export default function UserHistoryInput() {
  const methods = useForm();
  const postSubmit = (data) => { PostData(testTraget, data); };

  return (
    <Box sx={{ marginTop: 1, width: '700px', position: 'relative' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(postSubmit)}>
          <DialogHeader DatePickerContextName="DatePicker" TableTypeContextName="TableTypeSelector" />
          <Editor EditorContextName="EditorText" />
          <BtnSubmit />
        </form>
      </FormProvider>
    </Box>
  );
}
