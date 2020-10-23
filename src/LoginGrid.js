import React, {useState,  useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardLogin from './CardLogin';
import './LoginGrid.css';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import * as API from "./Api";
import {browserHistory} from 'react-router';


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
    height: '100vh',
    // objectFit:"cover"
    // minHeight: '100vh'
    // backgroundColor: 'blue'
  },
  form: {
    // order: -1
    // breakPointxs: 0
  },
  textField: {      
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFFFFF',
      },
      '&:hover fieldset': {
        borderColor: '#FFFFFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFFFFF',
      },
    },
  },




}));


  
 


var errormsg1='';
var errormsg2='';
var errormsg3='';

export default function LoginGrid() {
  const { setLogin,  setName,  setEmail} = useState('false');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [user, setUser] = useState({});

const [data, setData] = useState([]);
const [showError1, setShowError1] = useState(false);
const [showError2, setShowError2] = useState(false);
const [showError3, setShowError3] = useState(false);
const[imgId,setImgId]=useState([]);
const[caption,setCaption]=useState([]);
const [cardData,setCardData] = useState([]);
// const [name,setUname] = useState('abc');

const handleChange1 = event => {
  setUsername(event.target.value );
  console.log(username);
}

const handleChange2 = event => {
  setPassword(event.target.value );
}  

const handleSubmit = event => {
  event.preventDefault();
  // var temp = event.target.value;
  // temp = temp.slice(0, temp.indexOf('@'));
  // temp = temp.slice(0, temp.indexOf('.'));
  // setUname(temp)
  // window.location.reload()
  browserHistory.replace("/AllPost/");
//   var uname = username;
//   var flag=0;
//   var crypto = require( "crypto" );


// const key = 'rZAEcRJGMzKI+7QS';
// var tobeEncrypted = password;
// const iv = 'tZk2ug2ZVVya+Zwj';
// const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
//  var encryptedInput = (
//   cipher.update( tobeEncrypted, "utf8", "base64" ) +
//   cipher.final( "base64" )
//  );

//   console.log(uname);
  
//   if (!/\S+\.\S+@tarento.com+/.test(uname)) {
//         flag=1;
//          console.log("Emailerror");
//            errormsg2='Invalid Credentials!!!';
//            setShowError2(true);
//                return { showError2 }
             
//          }
//          else {

//           if(flag===0){
//             var url = 'http://kronos-test.idc.tarento.com/api/v1/user/getUserInfo';
//             console.log(encryptedInput);
//             console.log(flag);
//             console.log(username);
//             axios.post(url,JSON.stringify({ "email": username,"password": encryptedInput}) , 
//             { headers: {  "Content-Type": "application/json"  }})
          
//           .then(response => (response.data))
//             .then((data)=>{
//             setUser(data);
//             console.log(user)
//             console.log(data);
//             console.log(data.responseData.first_name);
//             var emailId=username
//             var fname=data.responseData.first_name
//             var lname=data.responseData.last_name
//             var  usrname = fname + ' ' + lname
//             if(data.statusMessage==='Success')
//         {
//           setShowError3(false);
//           setLogin(true);
//           setName(usrname);
//           setEmail(emailId);
//           console.log(emailId)
//           browserHistory.push("/AllPost/" + emailId + "/" + usrname);
//             return { showError3 }
          
          
//      }


//     else{
//       errormsg3="Invalid Credentials!!!";
//       setShowError3(true);
//           return { showError3 }

//      }        
//         })
    
//           .catch(error => {
//             console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
//             console.log(user);

//            errormsg3='Registration Failed '  + error ;
//            setShowError3(true);
//           return { showError3 }
              
//              }); 
          
//      }
//       }
      
  }
  
   
  const classes = useStyles();

//   useEffect(() => {
//     const fetchData=async()=>{
//     const response = await axios.get(API.ALL_POST);
//     console.log(response)
//   //  const data= response.data;
//     const d=response.data;
//     setData(d.reverse());
//     console.log(d.IMAGE_ID)
    
//     };
//   fetchData();
// }, []);

useEffect(() => {
  axios({
      method: 'GET',
      url: API.ALL_POST
  }).then(res => {
      // console.log(res.data)
      // console.log(res)
      const temp= res.data
      // setImgId(temp.IMAGE_ID)
      // setCaption(temp.CAPTION)
      setCardData(temp)
      // res.data.forEach( item =>{
        // setCardData(cardData.push(item.IMAGE_ID))
      // });

      
      
  })
},[])

console.log(cardData)


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
        {/* <form >
        
        <p style={{textAlign:'center', color:'whitesmoke',cursor:'default'}}> Sign in to share your memories</p>
        <input type="text" id="fname" name="firstname" placeholder="Email" />

        <input type="text" id="lname" name="lastname" placeholder="Password" />

  
       <input type="submit" value="LOGIN" style={{backgroundColor:'#1c0c24', fontSize:11}} />
       </form> */}
       <div >
            <div>
                {showError1 && <div className="error-message">{errormsg1}</div>} 
                </div>
            <div>
                {showError2 && <div className="error-message">{errormsg2}</div>}        
            </div>
            <div>
                {showError3 && <div className="error-message">{errormsg3}</div>} 
                </div>
            
                <div className='rightcontainer' >
               
                <form onSubmit={handleSubmit} >
                <p style={{textAlign:'center', color:'whitesmoke',cursor:'default'}}> Sign in to share your memories</p>
                <input type="email" id="fname" name="username" placeholder="Email" required 
                InputLabelProps={{required: false}}  
                className={classes.textField} 
                value={username}
                onChange={handleChange1}/>

                <input type="password" id="lname" name="password" placeholder="Password" 
                 style={{backgroundColor:"#FFFFFF",marginleft:"10px",height:"40px"}}  onChange={handleChange2}/>
                    {/* <TextField
                    placeholder="Email"
                    name="username"
                    required
                    variant="standard"
                    InputLabelProps={{required: false}}  
                    className={classes.textField} 
                    value={username}
                    onChange={handleChange1}
                    style={{backgroundColor:"#FFFFFF",height:"55px", width:"100%"}}
                    />
                    <div className="space"></div>
                    <TextField
                    type="password"
                    placeholder="Password"
                    name="password"
                    variant="outlined"
                    required
                    InputLabelProps={{required: false}}  
                    className={classes.textField} 
                    value={password}
                    onChange={handleChange2}
                    style={{backgroundColor:"#FFFFFF",height:"55px", width:"100%"}}
                    /> */}
                    <div className="space"></div>
                    <div className="space1"><br/>
                    
                    <Button variant="contained" 
                    type="submit"
                    style={{backgroundColor: "#1b0f3b", width:"100%", height: 45,fontSize:'16px',textTransform:'none', color:"#FFFFFF"}} 
                    >
                            LOGIN
                        </Button>
                        </div>
                        </form>
                    </div>
            </div>
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

