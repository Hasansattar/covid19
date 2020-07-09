import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

import Cards from './components/Cards/Cards.js'
import Chart from './components/Chart/Chart.js'
import CountryPicker from './components/CountryPicker/CountryPicker.js'

import coronaimage from './Image/covid_19.png'

import { fetchData } from './api/index.js'


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



  return (
    <div className={styles.container}>



      <img className={styles.image} src={coronaimage} alt="covid19" />

      <Cards data={state} />

      <CountryPicker handleCountryChange={handleCountryChange} country={country} />
      <Chart data={state} country={country} />


    </div>
  );
}

export default App;