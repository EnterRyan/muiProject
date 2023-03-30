import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/*  Quill Editor 사용(toast 유기.) 
*   toast UI 커스텀 불가 영역이 너무 많음.
*/
const toolbarOptoion = [
  []
];

const handleQuillEditor=(contents)=>{
  console.log(contents);
}

export default function EditorBox(){
  return (
   <ReactQuill
    onChange={handleQuillEditor}
   />
  );
}