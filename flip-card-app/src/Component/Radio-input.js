import React, { Component } from "react";

const RadioInput = (props) =>  {

  const colorChange = (e) => {
    props.colorChange(e.target.value);
  }

  const checkmark = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg";
  const altCheckmark = "Checked Icon";
   return (
     <div className="radio-input">
      <ul>
       <li className="title">Style:</li>
       <li>
           <input type="radio" name="color" value="color-1" onChange={colorChange} checked={props.checked}/>
         <label>
           <b>
             <img src={checkmark}  alt={altCheckmark}/>
           </b>
         </label>
        </li>

         <li>
           <input type="radio" name="color" value="color-2" onChange={colorChange} />
           <label>
             <b>
               <img src={checkmark} alt={altCheckmark} />
             </b>
           </label>
         </li>

         <li>
           <input type="radio" name="color" value="color-3" onChange={colorChange} />
           <label>
             <b>
               <img src={checkmark} alt={altCheckmark} />
             </b>
           </label>
         </li>

         <li>
           <input type="radio" name="color" value="color-4" onChange={colorChange} />
           <label>
             <b>
               <img src={checkmark} alt={altCheckmark} />
             </b>
           </label>
         </li>

         <li>
           <input type="radio" name="color" value="color-5" onChange={colorChange} />
           <label>
             <b>
               <img src={checkmark} alt={altCheckmark} />
             </b>
           </label>
         </li>
      </ul>
      </div>
    )

}



export default RadioInput;
