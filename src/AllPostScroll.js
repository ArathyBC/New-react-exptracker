import React, { useState, useEffect, useRef } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import CardLogin from './CardLogin';
import AllPostCard from './AllPostCard';
import './LoginGrid.css';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';
import img5 from './Images/img5.jpg';
import * as API from './Api';
import axios from '../node_modules/axios';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width:'40%',
    marginLeft: '30%',
    backgroundColor: '#6c0080',
    overflowY:'scroll',
    overflowX: 'hidden',
    height:'100%'
    // filter: 'brightness(90%)'
  },
  

  gridContiner: {
    maxheight: '100vh',
    padding: '20%',
    paddingTop: '10%'
  },
  gridItem: {
      padding: '8%',
  },
  body: {
      backgroundImage: `url(${img5})`,
      height:'100vh',
      overflow:'hidden'
    //   backgroundSize: 'cover'
    //   backdropFilter: 'brightness(90%)'
  }
}));
// function useOnScreen(options) {
//   const ref = useRef([]);
//   const [visible,setVisible] = useState('false')


//   useEffect(() => {
//     const observer = new IntersectionObserver((entry) =>{
//       setVisible(entry.isIntersecting)
//     }, options) ;
  
//     if(ref.current){
//       observer.observe(ref.current);
//       console.log(ref)
//     }

//     return () => {
//       if(ref.current){
//         observer.unobserve(ref.current);
//         console.log(ref)
//       }
//     }

//   }, [ref, options]);

//   return [ref, visible];
// }

function LoginGrid() {
const classes = useStyles();
const [imageList,setImageList] = useState([img1,img2,img3,img4,img5])
// const [ref, visible] = useOnScreen({threshold: 0.6});
const [cardData,setCardData] = useState([])

useEffect(() => {
  axios({
      method: 'GET',
      url: API.ALL_POST
  }).then(res => {
      // console.log(res.data)
      // console.log(res)
      const temp= res.data
      setCardData(temp.reverse())
      console.log(temp)
      
  })
},[])
  console.log(cardData)

  const addPost = () =>{
    
  }
  


  return (
    <div className={classes.body}>
    <div id = 'srollable' className={classes.root} >
      <Grid container justify='center' spacing={5} className={classes.gridContiner} direction='coloumn'>
      
       {cardData.map((cardData)=>(
        <Grid  item xs={12} className={classes.gridItem} >
        <AllPostCard  image={cardData.IMAGE_ID} caption={cardData.CAPTION} shareId={cardData.SHARE_ID} 
                      sender={cardData.SENDER} note={cardData.NOTE} />
        </Grid>
       ))}
    
        {/* <Grid item xs={12} className={classes.gridItem} >
        <CardLogin no='2' image='https://cdn.theatlantic.com/thumbor/ApjKEB47YbmSsDJRLpnEMRNBN94=/0x1500:4656x4121/720x405/media/img/mt/2020/05/LON72718/original.jpg' />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
        <CardLogin no='2' image='https://cdn.theatlantic.com/thumbor/ApjKEB47YbmSsDJRLpnEMRNBN94=/0x1500:4656x4121/720x405/media/img/mt/2020/05/LON72718/original.jpg' />
        </Grid> */}
      </Grid>
    </div>
    <Button variant='contained' style={{position:'absolute', right:0, bottom:0, padding:0,backgroundColor:'#6c0080', marginRight:15, marginBottom:15 }} 
            onClick={addPost}>
    <AddIcon style={{backgroundColor:'#6c0080',  color:'white', padding:10 }} />
    </Button>
    </div>
  );
}
export default LoginGrid;