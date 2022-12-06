import React from 'react'
import logo from '../logo.jpeg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#0AE",
        '@media (max-width:780px)': { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "5%", 
        '@media (max-width:780px)': { 
           display: "none"
           }
    },
    menuItem: {
        color: "#ffffff",
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#000000"
        },
        '@media (max-width:780px)': { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Projects
                </Typography>
                <img src={logo} alt="Logo" className={classes.logo}/> 
                <Typography variant="h6" className={classes.menuItem}>
                    Hobies 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Me 
                </Typography>
            </Toolbar>
    )
}

export default NavBar
