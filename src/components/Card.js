import React from 'react'
import { Box, makeStyles, Typography, Avatar } from '@material-ui/core'
import { MdOutlineArrowDropUp } from 'react-icons/md'
const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
        boxShadow: '0 0 8px grey',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        borderRadius:'5px',
        marginRight:'3rem'
    }
})

const Card = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography style={{ fontFamily: 'Nunito', fontSize: '1.2rem' }}>Total Profit<sub style={{ fontSize: '0.7rem' }}>(USD)</sub></Typography>
            <hr style={{ width: '100%' }} />
            <Typography style={{ fontWeight: 'bold' }}>128.8 $</Typography>
            {/* <hr style={{ width: '100%' }} /> */}
            <Box display = 'flex' alignItems = 'center'>
                <Typography style={{ fontWeight: 'bold' }}>15.4%</Typography>
                <MdOutlineArrowDropUp color='green' size='2.5em' />
            </Box>
        </Box>
    )
}

export default Card
