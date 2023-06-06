import React from "react";
import "./Loading.scss";

const Loading = ({ width, height, content }) =>
  content.map((i) => (
    <div key={i} className="loading-wrapper">
      <div
        className="loading-items"
        style={{ width: `${width}px`, height: `${height}px` }}
      ></div>
      <div style={{ marginTop: "1.4rem" }}>
        <div
          className="loading-items"
          style={{ width: "190px", height: "16px" }}
        ></div>
        <div
          className="loading-items"
          style={{ width: "50px", height: "18px", marginTop: "0.8rem" }}
        ></div>
      </div>
    </div>
  ));
export default Loading;
