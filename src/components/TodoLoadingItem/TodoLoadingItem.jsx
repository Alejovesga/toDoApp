import React from "react";
import "./TodoLoadingItem.css";

function TodoLoadingItem() {
  return (
    <div className="container">
      <div className="background">
        <div className="left">
          <div className="image"></div>
          <div className="mask thick"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export { TodoLoadingItem };
