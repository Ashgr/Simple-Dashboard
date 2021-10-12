import React from 'react'
import { Box, makeStyles, Typography, Avatar } from '@material-ui/core'
import Card from './Card'
const FinancialCards = () => {
    return (
        <Box display = 'flex' flexDirection = 'column' >   
            <Box display = 'flex' justifyContent = 'space-around' style ={{marginTop:'3rem'}}>
                <Card/>
                <Card/>
            </Box>
            <Box display = 'flex' justifyContent = 'space-around' style ={{marginTop:'3rem'}}>
                <Card/>
                <Card/>
            </Box>
           
        </Box>
    )
}

export default FinancialCards
