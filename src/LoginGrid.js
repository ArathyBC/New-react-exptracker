import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardLogin from './CardLogin';
import './LoginGrid.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },

  gridContiner: {
    maxheight: '100vh',
    // objectFit:"cover"
    // minHeight: '100vh'
    // backgroundColor: 'blue'
  },
  form: {
    // order: -1
    // breakPointxs: 0
  }
}));

export default function LoginGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify='center' className={classes.gridContiner}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        {/* <CardLogin no='1' /> */}
        
          
          <img src="https://smallbusiness.patriotsoftware.com/wp-content/uploads/2017/02/importance-teamwork-rs11369.jpg" alt="Girl in a jacket" ></img>
          
          
        
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardLogin no='2' image='https://cdn.theatlantic.com/thumbor/ApjKEB47YbmSsDJRLpnEMRNBN94=/0x1500:4656x4121/720x405/media/img/mt/2020/05/LON72718/original.jpg' />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <img src="https://methodshop.com/wp-content/uploads/teamwork-office-800x450.jpg" alt="Girl in a jacket" ></img>
        
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.form}>
        <div id = 'form'>
        <form >
        
        <p style={{textAlign:'center', color:'whitesmoke',cursor:'default'}}> Sign in to share your memories</p>
        <input type="text" id="fname" name="firstname" placeholder="Email" />

        <input type="text" id="lname" name="lastname" placeholder="Password" />

  
       <input type="submit" value="LOGIN" style={{backgroundColor:'#1c0c24', fontSize:11}} />
       </form>
       </div>
        </Grid> 
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardLogin no='4' image='https://rukminim1.flixcart.com/image/352/352/jqgy3rk0/sticker/m/u/z/large-m-teamwork2-80-m-teamwork2-marvellous-original-imafcgahhj9rgfdy.jpeg?q=70' />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Girl in a jacket" ></img>
        
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardLogin no='6' image='https://assets.entrepreneur.com/content/3x2/2000/20160428192311-team-building-activities-office-work-employees.jpeg' />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <img src="https://website-assets.teamwork.com/offload/app/uploads/2020/06/30150606/seegreen-img%402x.jpg" alt="Girl in a jacket" ></img>
        </Grid>
        
      </Grid>
    </div>
  );
}
