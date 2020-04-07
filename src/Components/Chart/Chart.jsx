import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const dailyData = await fetchDailyData();
            setDailyData(dailyData);
            console.log(dailyData);
        }

        fetchApi();
    });

    const lineChart = (
        dailyData.length ?
            (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        label: 'Infected',
                        borderColor: '#00c3ff',
                        fill: true,
                        data: dailyData.map(({ confirmed }) => confirmed),
                    },
                    {
                        label: 'Deaths',
                        borderColor: '#ff0000',
                        fill: true,
                        data: dailyData.map(({ deaths }) => deaths),
                    }
                    ]
                }}
            />) : null
    );
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;