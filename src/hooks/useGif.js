import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const useGif = (tag) => {

    // const API_KEY = "Ong8erZUdXXj4H59t8W4BYa1mqxSKOGq";
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${"Ong8erZUdXXj4H59t8W4BYa1mqxSKOGq"}`;



    async function fetchData(tag) {

        try {
            setLoading(true);
            const { data } = await axios(tag ? `${url}&tag=${tag}` : url);
            const imgSource = data.data.images.downsized_large.url;
            setGif(imgSource);
            setLoading(false);
        }
        catch (e) {
            console.log("error aa gya hai")
            console.log(e);
        }
    }
    useEffect(() => {
        fetchData('car');
    }, [])

    return { gif, loading, fetchData };
}

export default useGif