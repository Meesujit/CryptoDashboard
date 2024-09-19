import React from 'react'
import { Line } from 'react-chartjs-2'
import { ChartHeader, ChartTitle, CurrentPrice, PriceChange, PriceContainer } from '../styles/styledLineChart'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const LineChart = ({ coinHistory, currentPrice, coinName }) => {

    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory.data.history[i].price);
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                },
            },
        },
    };

    return (
        <>
            <ChartHeader>
                <ChartTitle>{coinName} Price Chart</ChartTitle>
                <PriceContainer>
                    <PriceChange isPositive={coinHistory?.data?.change >= 0}>
                        {coinHistory?.data?.change}%
                    </PriceChange>
                    <CurrentPrice>
                        Current {coinName} Price: $ {currentPrice}
                    </CurrentPrice>
                </PriceContainer>
            </ChartHeader>
            <Line data={data} options={options} />

        </>
    )
}

export default LineChart