import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

import CountUp from 'react-countup'

import cx from 'classnames';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'loading...'
    }



    return (
        <div className={styles.container}>

         
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography className={styles.h1} gutterBottom >Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">number of active cases of covid -19</Typography>
                    </CardContent>


                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography className={styles.h2} gutterBottom >Recovered</Typography>
                        <Typography variant="h5">

                            <CountUp start={0} end={recovered.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">number of recovered cases of covid -19</Typography>
                    </CardContent>


                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography className={styles.h3} gutterBottom >Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">number of death cases of covid -19</Typography>
                    </CardContent>


                </Grid>

            </Grid>




        </div>
    )
}

export default Cards;