import React from "react";
import selfie from "./assets/group-selfie.png";

const Pic = () => {
  return (
    <div className="s-pic">
      <div className="pic">
        <img src={selfie} alt="" />
      </div>
      <h1>Xiaomi 14 <span>Ultra</span></h1>
      <div className="point">
        <div className="dot-cir"></div>
        <p>Main Camera: <span>50MP</span></p>
      </div>
      <div className="point-2">
        <div className="dot-cir-2"></div>
        <p>Telephoto Camera (75mm): <span>50MP</span></p>
      </div>
      <div className="point-3">
        <div className="dot-cir-3"></div>
        <p>Periscope Camera (120mm): <span>50MP</span></p>
      </div>
    </div>
  );
};

export default Pic;
