import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import moment from 'moment';
import cx from 'classnames';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import CoronaDeaths from '../../Images/Corona-Deaths.jpg';
import CoronaInfected from '../../Images/Corona-Infected.png';
import CoronaRecovered from '../../Images/corona-recovered.jpg';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  });
  
 
  

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
  const classes = useStyles();
    if(!confirmed)
    {
        console.log(CoronaInfected);
        return 'Be Patient While I Load Myself......:)'
    }
    return(
      
<div className={styles.container}>
<Grid container spacing={3} justify="center">
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)} >
    <CardActionArea>
    <CardMedia
          className={classes.media}
          image={CoronaInfected}
          title="Infected Cases"
        />
        <CardContent>
    <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
                <CountUp 
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","/>
                </Typography>
            <Typography color="textSecondary" >{moment(lastUpdate).format('LLLL')}</Typography>
            <Typography variant="body2">Number of active cases in Covid19</Typography>
        </CardContent>
        </CardActionArea>
    </Grid>
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
    <CardActionArea>
    <CardMedia
          className={classes.media}
          image={CoronaRecovered}
          title="Recovered Cases"
        />
        <CardContent>
        
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5"><CountUp 
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","/></Typography>
            <Typography color="textSecondary" >{moment(lastUpdate).format('LLLL')}</Typography>
            <Typography variant="body2">Number of recovered cases in Covid19</Typography>
        </CardContent>
        </CardActionArea>
    </Grid>
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
    <CardActionArea>
    <CardMedia
          className={classes.media}
          image={CoronaDeaths}
          title="Death Cases"
        />
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
            <CountUp 
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","/>
            </Typography>
    <Typography color="textSecondary" >{moment(lastUpdate).format('LLLL')}</Typography>
            <Typography variant="body2">Number of Death cases in Covid19</Typography>
        </CardContent>
    </CardActionArea>
    </Grid>
</Grid>
</div>
    )
}
  

export default Cards;
