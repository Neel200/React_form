import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";
const API_KEY=import.meta.env.VITE_GIPHY_API_KEY;
function Tag(){
    const [tag,setTag]=useState('');
    const {gif,loading,fetchData}=useGif(tag);
    return(
        <div className="tag-container">
            <h1 className="tag-title">Random Gif</h1>
            {
                loading?(<Spinner/>):
                (<img src={gif} className="gif-image"/>)
            }
            <input className="tag-input" 
            onChange={(event)=>setTag(event.target.value)} value={tag}/>
            <button onClick={()=>fetchData(tag)} 
            className="btn-generate">
                Generate
            </button>
        </div>
    )
}
export default Tag;