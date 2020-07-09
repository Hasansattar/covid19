import React, { useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'


import { fetchCountries } from '../../api'



const CountryPicker = ({ handleCountryChange }) => {



    const [fetcherCountries, setFetcherCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {

            const countryname = await fetchCountries();
            setFetcherCountries(countryname);
        }
        fetchAPI();

    }, [setFetcherCountries]);

    // console.log(fetcherCountries);

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>s
                     <option value="">  Global  </option>

                    {fetcherCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker; 