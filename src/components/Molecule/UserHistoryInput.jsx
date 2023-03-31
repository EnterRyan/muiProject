import { useState } from 'react';
import EditorBox from '../Atoms/Editor';

export default function UserHistoryInput(){
  const [editorValue, setEditorValue] =  useState('');

  const handlSetEditorValue =(contents)=>{
    setEditorValue(contents);
    console.log(`molecule is  ${editorValue}`);
  };
  
  return (
    <>
      <h1>hi</h1>
      <EditorBox editValue={handlSetEditorValue}/>
    </>
  );
}