import React, { useState } from 'react';
import ReactDom from 'react-dom';


const Background = ()=>{

    const bgclr = "#e144de";
    const c = "white";
    const n = "varun";


    const [bg , setbg] = useState(bgclr);
    const [clr , setclr] = useState(c)
    const [name , setname] = useState(n)


    const background =()=>{
        let newname = "kumar varun vyas";
        setbg("#34495e");
        setclr("yellow");
        setname(newname);
    }
    const reset =()=>{
        let newname = " varun ";
        setbg(bgclr);
        setclr(c);
        setname(n);
    }
   
  
      return (
        <React.Fragment>
        <div style= {{ background:bg ,color:clr}}>
        <h1>{name}</h1>
        <br/> <br/>
        <button onMouseEnter = {background} onMouseLeave = {reset}>try it</button>
        </div>
        </React.Fragment>
    );
}

export default Background;