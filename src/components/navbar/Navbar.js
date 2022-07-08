import { AppBar, Button, Grid, Typography } from "@mui/material";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import { Container } from "@mui/system";
import './navbar.css'

const Navbar = () => {
    return ( 
    <AppBar position="static" color="secondary" sx={{py: 1}}>
        <Container maxWidth="xl">
         <Container >
            
        <Typography 
            align = "left"
            variant="text"
            className="logo"
            noWrap
            component="a"
            href="/"
            // startIcon = {
            //     <HomeTwoToneIcon className="icon"/>
            // }
            sx={{
              mr: 0,
              py: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.8em'
            
            }}
          >
            <HomeTwoToneIcon className="icon" />
            <span className="icon-center">Address Book</span>
          </Typography>
          </Container> 
          
        </Container>
    </AppBar> );
}
 
export default Navbar;