import React from 'react'
import click from "./assets/click.png";

const Selfie = () => {
  return (
    <div className="selfie">
        <img src={click} alt="" />
        <h1>SMILE</h1>
        <div className="flash"></div>
      </div>
  )
}

export default Selfie