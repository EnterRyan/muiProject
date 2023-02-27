//MUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';


export default function AppLogin(){
  return (
    <Box sx={{bgcolor:'#cfe8fc', height: '100vh'}}>
      <Container fixed maxWidth="lg" sx={{bgcolor : 'rgb(144, 202, 249)', height: '100vh', display : 'flex', alignItems : 'center'}}>
        <Box sx={{width : '70%', margin : '0 auto'}}>
          <TextField
            id='userId'
            label='ID'
            fullWidth
            required
            variant='outlined'
            />
          <TextField
            id='userPassWord'
            label='PassWord'
            fullWidth
            required
            type ='password'
            sx={{marginTop : '10px'}}
            variant='outlined'
            />
        </Box>
      </Container>
    </Box>
  );
}