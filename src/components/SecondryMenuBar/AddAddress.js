import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddAddress = () => {
    return ( 
        <span>
            <Button variant="contained" endIcon={<AddIcon />}>Add</Button>
        </span> );
}
 
export default AddAddress;