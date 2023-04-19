// eslint-disable-next-line no-unused-vars
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box } from '@mui/system';
import { useFormContext } from 'react-hook-form';

export default function Editor({ EditorContextName, defaultText }) {
  const formContext = useFormContext();
  const handleEditorInput = (input) => {
    formContext.setValue(EditorContextName, input);
  };
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
        onChange={handleEditorInput}
        modules={modules}
        defaultValue={defaultText}
      />
    </Box>
  );
}

Editor.propTypes = {
  EditorContextName: PropTypes.string,
  defaultText: PropTypes.string,
};
