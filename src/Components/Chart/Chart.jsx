import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import cx from 'classnames';


const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const dailyData = await fetchDailyData();
            setDailyData(dailyData);

        }

        fetchApi();
    }, []);


    const lineChart = (
        dailyData.length ?
            (<Line
                data={{
                    labels: dailyData && dailyData.map(({ date }) => date),
                    datasets: [{
                        label: 'Infected',
                        borderColor: '#00c3ff',
                        fill: false,
                        animation: true,
                        borderWidth: 1,
                        data: dailyData && dailyData.map(({ confirmed }) => confirmed),
                        pointStyle: 'rect'

                    },
                    {
                        label: 'Deaths',
                        borderColor: '#000000',
                        fill: false,
                        animation: true,
                        borderWidth: 1,
                        data: dailyData && dailyData.map(({ deaths }) => deaths),
                        pointStyle: 'rect'

                    }
                    ]
                }}
            />) : null
    );

    const barChart = (
        confirmed ?
            (
                <Bar

                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],

                        datasets: [{
                            label: 'People',
                            backgroundColor: ['#00c3ff', '#07800d', '#000000'],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `${country}` }
                    }}

                />

            ) : null
    );
    return (

        <div className={cx(styles.container, styles.chartContainer)}>


            <div className={cx(styles.container, styles.chartContainer)}>

                {country ? barChart : lineChart}
            </div>

        </div>
    )
}

export default Chart;