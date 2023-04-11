/* eslint-disable import/no-extraneous-dependencies */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box } from '@mui/system';

/*  Quill Editor 사용(toast 유기.) toast UI 커스텀 불가 영역이 너무 많음. */
// 에디터의 input이 항상 제어컴포넌트일 필요는 없을것 같다.(디바운싱 테스트)

export default function Editor({ handlSetEditorValue }) {
  const configureQuill = (quill) => quill.root.setAttribute('spellcheck', 'true');
  const handleQuillEditor = (contents) => { handlSetEditorValue(contents); };
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
        [{ color: ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { background: [] }],
      ],
    },
  }), []);

  return (
    <Box sx={{ marginBottom: '5px' }}>
      <ReactQuill
        theme="snow"
        onChange={handleQuillEditor}
        modules={modules}
        spellcheck={false}
        configureQuill={configureQuill}
      />
    </Box>
  );
}
Editor.propTypes = {
  handlSetEditorValue: PropTypes.func,
};
