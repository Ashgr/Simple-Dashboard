import React from 'react'
import { Box, makeStyles, Typography, Avatar, LinearProgress } from '@material-ui/core'
import { MdOutlineArrowDropUp } from 'react-icons/md'
const useStyles = makeStyles({
    root: {
        marginTop: '3rem',
        // marginLeft:'5rem',
        backgroundColor: '#fff',
        boxShadow: '0 0 8px grey',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        borderRadius: '5px'
    }
})
const LinearCard = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography style={{ fontFamily: 'Nunito', fontSize: '1.2rem', fontWeight: 'bold' }}>Dashboard rating</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" value ={70} style = {{height:'8px'}} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary" style ={{fontSize:'1.2rem'}}>{`${Math.round(
                        '70',
                    )}%`}</Typography>
                </Box>
            </Box>
            <Typography style = {{color:'#48579c', fontWeight:'bold', textDecoration:'underline', cursor:'pointer'}}>Complete Dashboard tasks</Typography>
        </Box>
    )
}

export default LinearCard
