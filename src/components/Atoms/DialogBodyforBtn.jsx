import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import {
  Button, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';

export default function DialogBodyforBtn(title, Content, handleBtn, btnVlaue) {
  return (
    <Box>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{Content}</DialogContent>
      <DialogActions>
        <Button onClick={handleBtn}>{btnVlaue}</Button>
      </DialogActions>
    </Box>
  );
}

DialogBodyforBtn.propTypes = {
  title: PropTypes.string,
  Content: PropTypes.string,
  handleBtn: PropTypes.func,
  btnVlaue: PropTypes.string,
};
