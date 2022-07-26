import { Card, CardContent, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    let listColor = grey[400];
    return ( 
        <Grid container sx={{justifyContent: 'center'}}>
            <Grid  item xs={11} md={7} sx={{backgroundColor: listColor}}>
                <Grid container sx={{justifyContent: 'center',pt:3}}>
                    <LockIcon color="secondary" sx={{fontSize:'5em'}}></LockIcon>
                    
                </Grid>
                <Grid container sx={{justifyContent: 'center'}}>
                    <Typography color='secondary' sx={{fontSize:'1.8em',lineHeight: '1em'}}>Login</Typography>
                </Grid>
                <Grid container sx={{justifyContent: 'center'}}>
                    <Grid item xs={9} md={7}>
                        item 1
                    </Grid>
                    <Grid item xs={9} md={7}>
                        item 2
                    </Grid>
                    <Grid item xs={9} md={7}>
                        item 2
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default Login;