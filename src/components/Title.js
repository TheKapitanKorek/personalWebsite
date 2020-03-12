import React from "react";
import { Background } from "../assets/img";

const Title = props => {
  return (
    <div className="green title">
      {props.title}
      <div className="title_bg">
        <img src={Background} className="title_img" alt="bg" />
        <div className="title_gradient" />
      </div>
    </div>
  );
};
export default Title;
