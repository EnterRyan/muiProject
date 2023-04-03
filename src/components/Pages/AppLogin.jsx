/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import axios from 'axios';
// MUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {
  Dialog, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';

const userInfo = { userId: '', userPassword: '' };

const loginStateCode = {
  0: '정상!',
  1: '아이디 또는 패스워드가 일치하지 않습니다.',
  2: '서버와 통신을 실패하였습니다.',
  3: '아이디 또는 패스워드를 입력하지 않았습니다.',
};

export default function AppLogin() {
  // UnControlled Form set
  const [userForm, setUserForm] = useState(userInfo);
  const handleForm = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };
  // Dialog State
  const [open, setOpen] = useState(false);
  const handleDialogClose = () => { setOpen(false); };
  // const handleDialogOpen = (e) => { setOpen(true); };

  const [loginFlag, setLoginFlag] = useState(0);

  const onCheckEnterkey = (e) => {
    if (e.key === 'Enter') {
      // eslint-disable-next-line no-use-before-define
      handleLoginData(e);
    }
  };
  const onCheckEscKey = (e) => {
    if (e.keyCode === 27) {
      handleDialogClose(e);
    }
  };
  // onSubmit Event Fucntion
  const handleLoginData = (e) => {
    e.preventDefault();
    if (userForm.userId === '' || userForm.userPassword === '') {
      setLoginFlag(3);
      setOpen(true);
      return;
    }

    axios.get(`/login?userId=${userForm.userId}&userPassword=${userForm.userPassword}`)
      .then((res) => {
        if (res.data === '0000') {
          setLoginFlag(0);
          setOpen(true);
        } else {
          setLoginFlag(1);
          setOpen(true);
        }
      })
      .catch(() => {
        setLoginFlag(2);
        setOpen(true);
      });
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <Container fixed maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '70%', margin: '0 auto' }}>
          <FormControl sx={{ width: '100%' }} onKeyDown={onCheckEnterkey}>
            <Typography variant="h5">
              Markany Edoc
            </Typography>
            <TextField
              id="userId"
              name="userId"
              label="아이디"
              fullWidth
              required
              sx={{ marginTop: '15px' }}
              variant="outlined"
              onChange={handleForm}
              value={userForm.userId}
            />

            <TextField
              id="userPassWord"
              name="userPassword"
              label="비밀번호"
              fullWidth
              required
              type="password"
              sx={{ marginTop: '13px' }}
              variant="outlined"
              onChange={handleForm}
              value={userForm.userPassword}
            />
            <Button type="submit" variant="contained" onClick={handleLoginData} fullWidth sx={{ marginTop: '15px' }}>Login</Button>
          </FormControl>
        </Box>
      </Container>

      <Dialog open={open} onKeyDown={onCheckEscKey}>
        <DialogTitle>로그인 실패</DialogTitle>
        <DialogContent>{`${loginStateCode[loginFlag]}`}</DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

/*
* onKeypress => onKeyDown (ESC키 인식할수있게변경.)
*/
