import React from 'react'
import {Divider, Toolbar, Typography, IconButton, Icon, Badge} from "@mui/material";
import {makeStyles} from "@mui/styles"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    }, 
    tagline: {
        fontSize: 20,
        textTransform: "uppercase",
        justifyContent: "center",
        fontFamily: 'Spline Sans'
    }
}))

function Header() {

const classes = useStyles();
  return (
    <>
    <Toolbar sx={{pl: 0}}>
        <IconButton color='inherit'>
        <MenuOutlinedIcon/>
        </IconButton>
  

    <Typography variant='h6' className={classes.title}>Blogs</Typography>
   

    <IconButton color='inherit'>
        <Badge badgeContent={1} color='secondary'>
        <NotificationsOutlinedIcon/>
        </Badge>
    
     </IconButton>

    <IconButton color='inherit'>
    <AccountCircleOutlinedIcon/>
    </IconButton>
    
    </Toolbar>
    <Divider/>
    </>
  )
}

export default Header