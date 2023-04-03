import { useState } from 'react';
//MUI
import Box from '@mui/material/Box';
//Atomic Component
import EditorBox from '../Molecule/Editor';
import SelectTableType from '../Atoms/SelectTableType';

/* 캘린더, 카테고리 셀릭트 박스, 종료버튼, 에디터, 히든 폼, 서브밋버튼.
*  에디터의 값을 State로 지정하고 Props로 내려준다. (근데 그럼 아토믹 설계가됨?)=> 더쪼갤수 있겠는대? 3등분
*  => 상위 컴포넌트 개발 후 Prop Drilling을 고려하여 Context API 사용 해보자.
*/

export default function UserHistoryInput(){
  const [editorValue, setEditorValue] =  useState('');

  const handlSetEditorValue =(contents)=>{
    setEditorValue(contents);
    console.log(`molecule is  ${editorValue}`);
  };
  
  return (
    <Box sx={{marginTop : 3}}>
      <Box sx={{width : '150px', marginBottom : 1}}>
        <SelectTableType/>
      </Box>
      <EditorBox editValue={handlSetEditorValue}/>
    </Box>
  );
}