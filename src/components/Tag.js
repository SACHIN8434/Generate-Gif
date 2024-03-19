import React from 'react'
import {useState} from "react";
import axios from 'axios';
import {useEffect} from 'react'
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";

const Tag = () => {

    // const API_KEY = "Ong8erZUdXXj4H59t8W4BYa1mqxSKOGq";
    // const [gif,setGif] = useState('');

    // const [loading,setLoading] = useState(false);
    

    //  async function fetchData(){

    //     try{
    //         setLoading(true);

    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${"Ong8erZUdXXj4H59t8W4BYa1mqxSKOGq"}&tag=${tag}`;
    //         const {data} = await axios(url);
    //         const imgSource = data.data.images.downsized_large.url;
    //         setGif(imgSource);
    //         setLoading(false);
    //     }
    //     catch(e){
    //         console.log("error aa gya hai")
    //         console.log(e);
    //     }
    //  }
    //  useEffect(()=>{
    //     fetchData();
    //  },[])

    // function clickHandler() {
    //     console.log("clicked");
    //     fetchData();

    // }
    const [tag,setTag] = useState('car');
    const {gif,loading,fetchData} = useGif(tag);


  return (
    <div className="Tag">
        <h1 className="random-gif-heading">Random gif</h1>
        {
            loading ? (<Spinner/>):( <img src={gif} />)
        }

       <input onChange={(event)=>setTag(event.target.value)}/>
       
        <button onClick={()=>fetchData(tag)} className="btn">
            GENERATE
        </button>
    </div>
  )
}

export default Tag