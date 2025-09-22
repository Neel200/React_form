import React from "react";
import Random from "./Components/Random";
import Tag from "./Components/Tag";
function App(){
  return(
    <div className="app-container">
      <h1 className='app-title'>RANDOM GIFS</h1>
      <div className="app-inner">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
export default App;