import axios from 'axios';
import React, { useState} from 'react'
import Snipper from './Snipper';
import useGif from '../Hook/useGif';


const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

function Tag() {

    const[tag,setTag] = useState('car');

    // const [gif,setgif] = useState("");

    // const [loading,setLoading] = useState(false);


    // async function fetchData() {

    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    //     const {data} = await axios.get(url);

    //     const output = data.data.images.downsized.url;

    //     setgif(output);

    //     setLoading(false);
    
    // }

    // useEffect(() => {

    //     fetchData();

    // },[])


    
    const {gif,loading,fetchData} = useGif(tag);


  return (
    <div className="w-1/2 h-[450px] bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

        <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>

        {loading ? <Snipper></Snipper> : <img src={gif} width={450}></img>}


        <input className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        type='text' value={tag} ></input>

        <button  className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
        onClick={() => fetchData(tag)}>

            Generate

        </button>

    </div>
  )
}

export default Tag