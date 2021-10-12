import React from 'react'
import { Line } from 'react-chartjs-2'
import { Box, makeStyles, Typography } from '@material-ui/core'
import CustomizedChart from './CustomizedChart'
import { getData } from '../data/index';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
        boxShadow: '0 0 8px grey',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        width: '695px',
        borderRadius: '5px',
        marginTop: '3rem',
        marginRight: '2rem'
    }
})
const SalesChart = () => {
    const classes = useStyles();
    const chartData = getData('Sales');
    
    return (
        <Box className={classes.root}>
            <Typography style={{ fontFamily: 'Nunito', fontSize: '1.2rem', fontWeight: 'bold' }}>{chartData.chartHead}</Typography>
            <CustomizedChart
                chartType={chartData.chartType}
                dataSet={chartData.dataSet}
                dataSetLabel={chartData.dataSetLabel}
                labels={chartData.labels}
                chartHeight={chartData.height}
                chartWidth={chartData.width}
            />
        </Box>
    )
}

export default SalesChart
