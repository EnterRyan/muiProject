/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import BtnCallCalender from '../Atoms/BtnCallCalender';
import ExitBtn from '../Atoms/ExitBtn';
import SelectTableType from '../Atoms/SelectTableType';

// TODO: 다이얼로그 헤더는 유형에따라 위에 있어야할 것이 다른데 합성모델로 구현이 가능할까?
export default function DialogHeader() {
  return (
    <Grid container>
      <Grid item xs={11}>
        <Box sx={{ marginTop: 1 }}>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs="auto">
              <BtnCallCalender />
            </Grid>
            <Grid item xs="auto">
              <SelectTableType />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box>
          <Grid container spacing={2} alignItems="flex-start" justifyContent="flex-end">
            <Grid item xs="auto">
              <ExitBtn />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
