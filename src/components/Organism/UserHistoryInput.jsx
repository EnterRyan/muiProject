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

/* DialogHeader, Editor, PostHiddenForm 구성.
*  에디터의 값을 State로 지정하고 Props로 내려준다. (근데 그럼 아토믹 설계가됨?)=> 더쪼갤수 있겠는대? 3등분
*  => 상위 컴포넌트 개발 후 Prop Drilling을 고려하여 Context API 사용 해보자.
*  에디터를 form의 인풋중 하나로 취급하면 히든폼을 따로 만들필요가없다고한다.(react-hook-form)알아BOZA
*/
export default function UserHistoryInput() {
  const methods = useForm();
  const postSubmit = (data) => { console.log(data); };

  // eslint-disable-next-line no-unused-vars
  const [tableType, setTableType] = useState('');
  const handleTalbeType = (type) => { setTableType(type); };

  const [inputDate, setInputDate] = useState(null);
  const handleChangeDate = (newValue) => { setInputDate(newValue); };

  return (
    <Box sx={{ marginTop: 1, width: '700px', position: 'relative' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(postSubmit)}>
          <DialogHeader handleChangeDate={handleChangeDate} handleTalbeType={handleTalbeType} />
          <Editor EditorContextName="EditorText" />
          <BtnSubmit />
        </form>
      </FormProvider>
    </Box>
  );
}
