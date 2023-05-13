import React from "react";
import categoriesArr from "./Categories.json";
import Category from "./Category";

export default function Categories() {
  return (
    <div className="container">
      <div className="row">
        {categoriesArr.map((categoryObj) => {
          return <Category categoryObj={categoryObj} />;
        })}
      </div>
    </div>
  );
}
