import React, { Component } from "react";


const Card = (props) => {
  const holdTempClass = "card ";
  return (
    <div className={holdTempClass + props.name}>
      <div className="content">
        <div className="front">
          Front
         </div>
        <div className="back">
          Back!
        </div>
      </div>
    </div>
  )
}



export default Card;
