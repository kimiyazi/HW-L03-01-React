import { useState } from "react";

export const InputButton = () => {

    const [inputValue, setInputValue] = useState("");

  return (
   <> 
      <input type="text" placeholder="Type something"  onChange={(e)=>{
        setInputValue(e.target.value)
      }}/>
      <button  className="btn" onClick={()=>{
        console.log(inputValue);
      }}>Show in Console</button>
   </> 
  )
}

export default InputButton;