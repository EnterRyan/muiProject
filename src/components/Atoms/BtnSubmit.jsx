import React from 'react';
import { Button } from '@mui/material';

const BtnCss = { position: 'absolute', right: '0', marginBottom: '5px' };
const handleClickSubmit = () => { console.log('Click!'); };

export default function BtnSubmit() {
  return (
    <Button
      variant="contained"
      sx={BtnCss}
      onClick={handleClickSubmit}
    >
      저장
    </Button>
  );
}
