import React from "react";
import "./css/TodoForm.css";

export default function TodoForm({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const inputSubmissionHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random() * 1000, text: inputText, isComplete: false },
    ]);
    setInputText("");
  };
  return (
    <div className="todo-form-wrapper">
      <div className="todo-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <form action="/" onSubmit={inputSubmissionHandler}>
                <div className="input-group py-2">
                  <input
                    value={inputText}
                    type="text"
                    className="form-control todo-text"
                    placeholder="Type something here & press enter..."
                    onChange={inputTextHandler}
                  />
                  <button className="btn btn-primary" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
