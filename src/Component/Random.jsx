import axios from 'axios';
import React  from 'react'
import Snipper from './Snipper';
import useGif from '../Hook/useGif';


const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

function Random() {


    // const [gif,setgif] = useState("");

    // const [loading,setLoading] = useState(false);


    // async function fetchData() {

    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    //     const {data} = await axios.get(url);

    //     const output = data.data.images.downsized.url;

    //     setgif(output);

    //     setLoading(false);
    
    // }

    // useEffect(() => {

    //     fetchData();

    // },[])

    // function clickHandler() {

    //     fetchData();

    // }

    const {gif,loading,fetchData} = useGif();


  return (
    <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

        <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>

        {loading ? <Snipper></Snipper> : <img src={gif} width="450"></img>}

        <button  className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
        onClick={() => fetchData()}>

            Generate

        </button>

    </div>
  )
}

export default Random