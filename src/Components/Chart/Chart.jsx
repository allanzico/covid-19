import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';
import { ResponsiveLine } from 'nivo';
import styles from './Chart.module.css';
import cx from 'classnames';
import moment from 'moment';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const dailyData = await fetchDailyData();
            setDailyData(dailyData);

        }

        fetchApi();
    }, [dailyData]);


    const lineChart = (
        dailyData.length ?
            (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        label: 'Infected',
                        borderColor: '#00c3ff',
                        fill: false,
                        animation: true,
                        borderWidth: 1,
                        data: dailyData.map(({ confirmed }) => confirmed),
                        pointStyle: 'rect'

                    },
                    {
                        label: 'Deaths',
                        borderColor: '#ff0000',
                        fill: false,
                        animation: true,
                        borderWidth: 1,
                        data: dailyData.map(({ deaths }) => deaths),
                        pointStyle: 'rect'

                    }
                    ]
                }}
            />) : null
    );
    return (

        <div className={cx(styles.container, styles.chartContainer)}>


            <div className={cx(styles.container, styles.chartContainer)}>

                {lineChart}
            </div>

        </div>
    )
}

export default Chart;