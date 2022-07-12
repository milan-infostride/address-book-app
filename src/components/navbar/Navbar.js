import { AppBar, Button, createTheme, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, ThemeProvider, Typography } from "@mui/material";
import { useState } from 'react'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import { Container } from "@mui/system";
import './navbar.css'
import { grey } from '@mui/material/colors';



const Navbar = () => {
  const color = grey[200];
  const [selected,setSelected] = useState('');
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[100]
      },
    },
  });
    return ( 
    <AppBar position="static" color="secondary" sx={{py: 1}}>
        <Container maxWidth="xl" sx={{
          display:'flex',
          alignItems: 'center'
          }}>
         {/* <Container > */}
            
        <Typography 
            align = "left"
            variant="h1"
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
          
            <Typography 
              variant="h3"
              noWrap
              sx={{
                py:1,
                ml:'auto',
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '1.4em'

              }}
            >
              <span style={{
                alignSelf: 'center',
                marginRight: '1em'
              }}>Hello User</span>
              <ThemeProvider theme={theme}>
              <FormControl sx={{
                
              }} >
              {/* <InputLabel id="demo-simple-select-label">Login/Logout</InputLabel> */}
              <Select
                //  multiple
                displayEmpty
                // sx={{
                //   color: "#fff"
                // }}
                // color={color}
                value={selected}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                input={<OutlinedInput/>}
                renderValue={(selected)=>{
                  // console.log(selected)
                  if(selected.length===0){
                    // console.log('hello')
                    return <em>Login/Logout</em>;
                  }
                }}
                // placeholder="Login/Logut"
                // value={age}
                // label="Age"
                // onChange={handleChange}
              >
                <MenuItem disabled>
                  <em>Login/Logout</em>
                </MenuItem>
                <MenuItem >Login</MenuItem>
                <MenuItem >Logout</MenuItem>
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
            </ThemeProvider>
      
            </Typography>
            
          </Container>
          {/* </Container>  */}
          
        
    </AppBar> );
}
 
export default Navbar;