import React from 'react';
import { Button } from '@mui/material';

const BtnCss = { position: 'absolute', right: '0', marginBottom: '5px' };
export default function BtnSubmit() {
  return (
    <Button
      variant="contained"
      sx={BtnCss}
      type="submit"
    >
      저장
    </Button>
  );
}
