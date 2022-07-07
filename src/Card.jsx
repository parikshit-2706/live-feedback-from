import React, { useState } from "react";

function Card(props) {
  console.log("from card");

  return (
    <div className="card">
      <h3>Hi from card </h3>
      <p>{props.feedback}</p>
    </div>
  );
}

export default Card;
