import React from "react";
import "./css/TodoHeader.css";

export default function TodoHeader() {
  return (
    <div className="todo-heder-wrapper">
      <div className="todo-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-3 text-center">
              <h1>Todo Items</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
