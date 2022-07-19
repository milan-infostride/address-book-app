import { Avatar, Button, Card, CardActions, CardContent, CardHeader, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField, Typography, useMediaQuery , useTheme } from "@mui/material";
// import { bgcolor } from "@mui/system";
import { grey, purple } from '@mui/material/colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from "react";
import './centerModal.css'


import AddressModal from "./AddressModal";
import { createRef } from "react";
// import { useTheme } from "@emotion/react";


// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//       [theme.breakpoints.down('sm')]: {
//         width: '75%'
//     }
//     },
//   }));

const SecondaryMenuBar = () => {
    let theme = useTheme();
    let isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
    
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
          [theme.breakpoints.down('sm')]: {
            width: '75%'
        }
        },
      }));
    
    const [sortFilter,setSortFilter] = useState();
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        height: '2.5em',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            width: '75%'
        }
      }));

    let bgColor = grey[900];
    let listColor = grey[500];
    const [modalState,setModalState] = useState(false);
    const [modalHeight,setModalHeight] =useState();
    const [modalWidth,setModalWidth] = useState();
    const ref = useRef();
    const openAddModal = ()=>{
        
        
        setModalState(true);
        setTimeout(()=>{console.log(ref.current.clientHeight,ref.current.clientWidth);
            setModalHeight(ref.current.clientHeight);
            setModalWidth(ref.current.clientWidth);
            ref.current.classList.add('centerModal')
        },500)
    }
    const closeAddModal = ()=>{
        setModalState(false)
    }
    const style = {
        justifyContent: 'center',
        alignItems: 'center'
    } 
    
    return ( 
        <Grid container sx={{backgroundColor: listColor}} spacing={2}>
            <Grid item xs={6} md={3} sx={{display:'flex-item',py:2,alignItems:'middle',justifyContent:'center'}}>
                <Button variant='contained' size='small' onClick={openAddModal} color="secondary" endIcon={<AddCircleIcon />}>Add</Button>
            </Grid>
            <Grid item xs={6} md={3} sx={{display:'flex-item',py:2,alignItems:'middle',justifyContent:'center'}}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
            </Search>
            </Grid>
            <Grid item xs={6} md={3} sx={{display:'flex-item',py:2,alignItems:'middle',justifyContent:'center'}}>
                <FormControl color='secondary' size="small" variant="filled" sx={{ minWidth: 120 }}>
                    <InputLabel size="small" id="demo-simple-select-filled-label">Sort</InputLabel>
                    <Select
                        size='small'
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={sortFilter}
                        onChange={(e)=>{setSortFilter(e.target.value)}}
                    >
                    
                        <MenuItem value={'dl'}>Date (Latest)</MenuItem>
                        <MenuItem value={'do'}>Date (Oldest)</MenuItem>

                        <MenuItem value={'a-z'}>Name (A-Z)</MenuItem>
                        <MenuItem value={'z-a'}>Name (Z-A)</MenuItem>

                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6} md={3} sx={{display:'flex-item',py:2,alignItems:'middle',justifyContent:'center'}}>
              <Button color='secondary' size='small' variant="contained">Total = 0</Button>
                    
                
            </Grid>
            <Modal
            BackdropProps={style}
            ref={ref}
            open={modalState}
            onClose={closeAddModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Card sx={{ width: isDesktop?'auto':330, maxWidth: isDesktop?345:454,position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', }} raised>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: purple[500] }}>
                        <AddIcon ></AddIcon>
                    </Avatar>
                    }
                    
                    title="Add Address"
                    
                />
                <CardContent>
                    <Grid container sx={{justifyContent:'center'}}>
                        <Grid item mb={1}><TextField  id='bl' label='Building &#38; Location' variant="outlined" size='small'></TextField></Grid>
                        <Grid item mb={1}><TextField id='city' label='City' size='small'></TextField></Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <Button variant='contained' startIcon={<AddCircleIcon />} size='small' color='success'>Delete</Button>
                </CardActions>
            </Card>
            
            
        </Modal>
        </Grid>
     );
}
 
export default SecondaryMenuBar;