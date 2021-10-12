import React from 'react'
import { Pie, Line, Scatter,Bar } from 'react-chartjs-2'

const CustomizedChart = (props) => {
    return (
        <>
            {props.chartType === 'Pie' && <Pie
                data={{
                    labels: props.labels,
                    datasets: [
                        {
                            label: props.dataSetLabel,
                            data: props.dataSet,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 2,
                        }
                    ],
                }}
                height={props.chartHeight}
                width={props.chartWidth}
                options={{
                    maintainAspectRatio: true,
                }}
            />}
            {props.chartType === 'Line' && <Line
                data={{
                    labels: props.labels,
                    datasets: [
                        {
                            label: props.dataSetLabel,
                            data: props.dataSet,
                            fill: true,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0,
                            backgroundColor: 'rgba(220, 220, 255,1)'
                        }
                    ],
                }}
                // height={400}
                // width={600}
                options={{
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            ticks: {
                                callback: function (value, index, values) {
                                    return '$' + value;
                                }
                            }
                        },
                        x: {
                            text: 'Months'
                        }
                    }
                }}
            />}
            {props.chartType === 'Scatter' && <Scatter
                data={{
                    labels: props.labels,
                    datasets: [
                        {
                            label: props.dataSetLabel,
                            data: props.dataSet,
                            fill: true,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0,
                            backgroundColor: 'rgb(0, 0, 0)'
                        }
                    ],
                }}
                // height={400}
                // width={600}
                options={{
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            ticks: {
                                callback: function (value, index, values) {
                                    return '$' + value;
                                }
                            }
                        },
                        x: {
                            text: 'Months'
                        }
                    }
                }}
            />}
            {props.chartType === 'Bar' && <Bar
                data={{
                    labels: props.labels,
                    datasets: [
                        {
                            label: props.dataSetLabel,
                            data: props.dataSet,
                            fill: true,
                            borderColor: 'rgb(38, 20, 180)',
                            tension: 0,
                            backgroundColor: 'rgb(38, 20, 140)'
                        }
                    ],
                }}
                // height={400}
                // width={600}
                options={{
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            ticks: {
                                callback: function (value, index, values) {
                                    return '$' + value;
                                }
                            }
                        },
                        x: {
                            text: 'Months'
                        }
                    }
                }}
            />}
        </>
    )
}

export default CustomizedChart
