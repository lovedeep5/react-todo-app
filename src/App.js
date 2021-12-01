import React, { useState, useEffect } from "react";
import TodoHeader from "./component/TodoHeader";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const initialTodos = localStorage.todos ? JSON.parse(localStorage.todos) : [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.todos = JSON.stringify(todos);
  }, [todos]);

  return (
    <div className="App">
      <TodoHeader />
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
