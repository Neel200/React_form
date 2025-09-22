import React from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";
const API_KEY=import.meta.env.VITE_GIPHY_API_KEY;
function Random(){
    const {gif,loading,fetchData}=useGif();
    return(
        <div className="random-container">
            <h1 className="random-title">Random Gif</h1>
            {
                loading?(<Spinner/>):
                (<img src={gif} className="gif-image"/>)
            }
            <button onClick={()=>fetchData()} 
            className="btn-generate">
                Generate
            </button>
        </div>
    )
}
export default Random;