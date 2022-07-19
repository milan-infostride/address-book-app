import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import AddressCard from "./AddressCard";


const AddressList = () => {
    let theme = useTheme();
    let isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    let listbg = grey[500];
    return ( 
        <Grid container sx={{justifyContent: 'center',mt:5}}>
            <Grid container item xs={12} md={9} sx={{backgroundColor : grey[600], p:!isDesktop?3:5}}>
                <Grid item='item' xs={12} md={6}>
                    <AddressCard />
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default AddressList;