import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const AddressCard = () => {
    
    
    
    return ( 
        <Card sx={{ maxWidth: 345 }} raised>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Grid container >
                    <Grid container item mb={0.6}>
                        <Grid item sx={{display:'flex-item'}} xs={12} color='text.secondary'>Building &#38; Location</Grid>
                        <Typography variant='body2' >172/5 sbp homes ext 3 tower 4 sector 126 khgwdskwhduikwhduiowhduiwhd iuwhduiwdhui whkg uguiguigmmmmmm</Typography>
                    </Grid>
                    <Divider></Divider>
                    <Grid container item mb={0.6}>
                        <Grid item sx={{display:'flex-item'}} xs={12} color='text.secondary'>City</Grid>
                        <Grid item sx={{display:'flex-item'}} xs={12} >Mohali</Grid>
                    </Grid>
                    <Divider />
                    <Grid container item >
                        <Grid item sx={{display:'flex-item'}} xs={12} color='text.secondary'>State</Grid>
                        <Grid item sx={{display:'flex-item'}} xs={12} >Punjab</Grid>
                    </Grid>
                   
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <Button variant='contained' startIcon={<DeleteIcon />} size='small' color='error'>Delete</Button>
                <Button variant='contained' sx={{ml:2}} startIcon={<EditIcon />} size='small' color='secondary'>Edit</Button>
            </CardActions>
      </Card>
     );
}
 
export default AddressCard;