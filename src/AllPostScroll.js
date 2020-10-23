import React, { useState, useEffect, useRef } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import CardLogin from './CardLogin';
import AllPostCard from './AllPostCard';
import './LoginGrid.css';
import img1 from './Image/img1.jpg';
import img2 from './Image/img2.jpg';
import img3 from './Image/img3.jpg';
import img4 from './Image/img4.jpg';
import img5 from './Image/img5.jpg';
import img6 from './Image/img6.jpg';
import * as API from './Api';
import axios from 'axios';
import Link from '@material-ui/core/Link';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {browserHistory} from 'react-router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Spinner1 from './Spinner1';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width:'40%',
    marginLeft: '30%',
    backgroundColor: '#5233b0',
    overflowY:'scroll',
    overflowX: 'hidden',
    height:'100%'
    // filter: 'brightness(90%)'
  },
  

  gridContiner: {
    height: '100vh',
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

function AllPostScroll() {
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
    browserHistory.push("/Home/");
    
  }
  


  return (
    <div className={classes.body}>
      <Button variant='contained' style={{position:'absolute', right:0, top:0, padding:0,
    backgroundColor:'#1b0f3b',color:'white',fontSize:'12px',fontWeight:'light' ,marginRight:15, marginTop:15, 
    padding:[10,8,8,10], borderRadius:0 }} 
    startIcon={<ExitToAppIcon />}
    onClick={() => browserHistory.push('/Login')} >
    Log out
    </Button>
      {/* <Link  component="button" variant="body2" style={{position:'absolute', fontSize:'16px', fontWeight:500 ,right:45, top:20}} 
      onClick={() => browserHistory.push('/Login')} >
           Logout
      </Link>
      <ExitToAppIcon style={{position:'absolute', right:15, top:20, color:'#5233b0' }} /> */}
    <div id = 'srollable' className={classes.root} >
      {cardData.length ?(<Grid container justify='center' spacing={5} className={classes.gridContiner} direction='coloumn'>
      
      {cardData.map((cardData)=>(
       <Grid  item xs={12} className={classes.gridItem} >
       <AllPostCard  image={cardData.IMAGE_ID} caption={cardData.CAPTION} shareId={cardData.SHARE_ID} 
                     sender={cardData.SENDER} note={cardData.NOTE} />
       </Grid>
      ))}
   
       
     </Grid>)
      
      :(<Spinner1 />)}
      
    </div>
    
    <IconButton variant='contained' style={{position:'absolute', right:15, bottom:25, padding:0,backgroundColor:'#5233b0', borderRadius:0, padding:10 }} 
            onClick={addPost}>
    <AddIcon style={{backgroundColor:'#5233b0',  color:'white', padding:0 }} />
    </IconButton>
    
    </div>
  );
}
export default AllPostScroll;
