import React from 'react'
import { Box, makeStyles, Typography, Avatar } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#292b69',
        width: 'auto',
        padding: '.7rem'
    },
    image: {
        width: '45px',
        height: '45px'
    },
    logout: {
        border: '1px solid white',
        fontFamily:'Nunito',
        color: 'white',
        padding: '.6rem',
        borderRadius: '5px',
        marginLeft: '1rem',
        letterSpacing: '3px',
        transition: 'color 0.6s ease',
        transition: 'background-color 0.6s ease',
        cursor:'pointer',
        '&:hover': {
            backgroundColor: '#fff',
            color:'#292b69'
        },
    }
})

const Navbar = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography style={{ color: '#fff', fontFamily: 'Nunito', textTransform: 'uppercase', fontSize: '1.4rem', letterSpacing: '3px' }}>
                Brand One
            </Typography>
            <Box display='flex' justifyContent='space-around'>
                <Typography style={{ marginRight: '2rem', color: '#fff', fontFamily: 'Nunito', fontSize: '1.3rem', letterSpacing: '3px' }}>
                    Features
                </Typography>
                <Typography style={{ marginRight: '2rem', color: '#fff', fontFamily: 'Nunito', fontSize: '1.3rem', letterSpacing: '3px' }}>
                    Plans
                </Typography>
                <Typography style={{ marginRight: '2rem', color: '#fff', fontFamily: 'Nunito', fontSize: '1.3rem', letterSpacing: '3px' }}>
                    Dashboard
                </Typography>
            </Box>
            <Box display='flex' justifyContent='space-around'>
                <Avatar className={classes.image} alt="user photo" src='person.jpg' />
                <Typography className={classes.logout}>Logout</Typography>
            </Box>
        </Box>
    )
}

export default Navbar
