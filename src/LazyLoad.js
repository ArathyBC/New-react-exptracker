import React, { useState, useEffect } from 'react'
import * as API from './Api';
import axios from '../node_modules/axios';



export default function LazyLoad() {
    const [cardData,setCardData] = useState([{}])

    // useEffect(() => {
    //     const fetchData=async()=>{
    //     const response = await axios.get(API.ALL_POST);
    //     console.log(response)
    //     // const data= response.data;
    //     // setCardData(data.reverse());
    //     setCardData(response.data)
    //     console.log(cardData);
    //   }
    //   fetchData();});
    useEffect(() => {
        axios({
            method: 'GET',
            url: API.ALL_POST
        }).then(res => {
            console.log(res.data)
            const test = res.data
            console.log(test)
        })
    })
    
    
    return(
        <div>
          hello guys
          {/* {cardData} */}
        </div>
    )
}