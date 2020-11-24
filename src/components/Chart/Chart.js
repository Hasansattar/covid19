import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api/index.js'
import { Line, Bar } from 'react-chartjs-2'
import { Pie } from "react-chartjs-2";
import styles from './Chart.module.css'

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {


    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());

        }

        fetchAPI();
        //  console.log(dailyData);

    }, []);

    const lineChart = (
        dailyData ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    }],
                }}

            />) : null
    );



    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'people',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]

                }}
                options={{
                    legend: { display: false },
                    title: { display: true, },

                }}

            />
        ) : null
    );

    ///
    const pieChart = (
        confirmed ? (
            <Pie
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'HorizontalBar Chart',
                            data: [confirmed.value, recovered.value, deaths.value],
                            borderColor: ["#1c7ad1", "#026e26", "#e73d1f"],
                            backgroundColor: ["#1c7ad1", "#026e26", "#e73d1f"],
                        },
                    ],
                }}
                options={{
                    title: {
                        display: true,
                        fontSize: 24,
                        fontColor: "White",
                        text: 'Global Data Chart',
                    },
                    legend: false,
                    plugins: {
                        datalabels: {
                            align: "end",
                            anchor: "end",
                            backgroundColor: '#1a1919',
                            borderColor: null,
                            borderRadius: 2,
                            borderWidth: 1,
                            color: "white",
                            font: {
                                size: 11,
                                weight: 800,
                            },
                            offset: -35,
                            padding: 2,
                            formatter: 15,
                        },
                    },

                }}

            />
        ) : null
    );



    /////




    return (
        <div className={styles.container}>
            {barChart}

            <br />   <br /> <br />

            {pieChart}



            <br />   <br /> <br />
            {lineChart}


        </div>
    )
}

export default Chart;