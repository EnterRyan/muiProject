//MUI
import ClearIcon from '@mui/icons-material/ClearOutlined';
import { IconButton } from '@mui/material';


export default function ExitBtn(){
  const handleClickEvent = (e)=>{
    console.log(e);
  }
  return(
    <IconButton aria-label='clear' onClick={handleClickEvent} >
      <ClearIcon/>
    </IconButton>
  );
}