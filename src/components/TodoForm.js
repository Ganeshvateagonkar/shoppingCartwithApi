import React, { useState } from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  Input,
  Button,
  Container,
  InputGroupText,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("please fill some value");
    }
    const todo = {
      id: uuidv4(),
      todoString,
    };
    addTodos(todo);
    setTodoString("");
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="enter a todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupText>
            <Button color="success">Add</Button>
          </InputGroupText>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
