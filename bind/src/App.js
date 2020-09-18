import React, { useState } from 'react';




const Map= () =>{
  const state = useState();
  
  const [time , settime] = useState(new Date().toLocaleTimeString());
 // console.log(state);

  const incBtn =()=> {
   

    settime(new Date().toLocaleTimeString());
  
  }
  
    setInterval(incBtn,1000);
    return(
      <React.Fragment>
        <h1> {time} </h1>
        <br/>
        {/* <button onClick = {incBtn} > tap </button> */}

        
      </React.Fragment>
    );
  
}

export default Map;