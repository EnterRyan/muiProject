import react from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Profile(){
  const avatarSize = {width : 300, height : 300};
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={avatarSize}/>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={avatarSize} />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={avatarSize} />
  </Stack>
  );
}