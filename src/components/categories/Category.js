import React from "react";
import "./Categories.css";

export default function Category({ categoryObj }) {
  const { img_url, text } = categoryObj;
  return (
    <div className="col">
      <div className="category text-center">
        <img src={img_url} alt="image is not there" />
        <div>{text}</div>
      </div>
    </div>
  );
}
