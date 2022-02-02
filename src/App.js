import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoContext } from "./context/TodoContext";
import ToReducer from "./context/reducer";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [todos, dispatch] = useReducer(ToReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>To do app with contect api</h1>
        <Todos />

        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
