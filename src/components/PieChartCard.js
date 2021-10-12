import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { getData } from '../data/index';
import CustomizedChart from './CustomizedChart';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
        padding: '1rem',
        boxShadow: '0 0 8px grey',
        width: '400px',
        marginTop: '2rem'
    }
})

const PieChartCard = () => {
    const classes = useStyles();
    const chartData = getData('UserTypes');
    // console.log(chartData)
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

export default PieChartCard
