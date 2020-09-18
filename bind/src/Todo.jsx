import React, { useState } from 'react';
import "./index.css";

const Form =() =>{

    const [name , setName] = useState("");
    const [fullname, setfull] = useState();
  
    const inputEvent = (event)=>{
            console.log(event.target.value);
            setName(event.target.value);
    }
    const onSubmit = ()=> {
        setfull(name);
        setName('');
    }

    return(
        <React.Fragment>
        
        <div>
        
          
           
            <input type = "text" placeholder="Enter name"
                onChange = {inputEvent}
                value = {name}
            />
            <br />
            <button onClick ={onSubmit}> send</button>

             <br/>
            <h1>hello {fullname}</h1>
        
        
        </div>
        
        </React.Fragment>
    )
}

export default Form;