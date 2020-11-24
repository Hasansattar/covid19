import React, { useEffect, useState, Suspense } from 'react';
import styles from './App.module.css';

import Cards from './components/Cards/Cards.js'
import Chart from './components/Chart/Chart.js'
import CountryPicker from './components/CountryPicker/CountryPicker.js'

import Header from './components/Header/Header'
import { CircleLoader } from 'react-spinners'

import { fetchData } from './api/index.js'
import { css } from '@emotion/react'



function App() {

  const [state, setstate] = useState([{}])
  const country = useState("")





  useEffect(() => {
    async function getRepo() {
      const dataAPI = await fetchData();

      setstate(dataAPI);

      // console.log(dataAPI);

    }
    getRepo();




  }, []);


  let handleCountryChange = async (country) => {
    const dataAPII = await fetchData(country);

    setstate(dataAPII);



    console.log(dataAPII);
    //console.log(country);

  }



  const loader = css` margin-top : 50%; `

  return (
    <div className={styles.container}>
      <Suspense fallback={<CircleLoader css={loader} size={200} color='rgb(101, 255, 222)' loading />}>
      <Header />




      <Cards data={state} />

      <CountryPicker handleCountryChange={handleCountryChange} country={country} />
      <Chart data={state} country={country} />

      </Suspense>
    </div >
  );
}

export default App;