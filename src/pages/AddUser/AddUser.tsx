import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { todoContext } from "../../provider/TodoProvider";
import { useHistory } from "react-router";
import { v4 } from "uuid";
const AddUser = () => {
  const [todo, setTodo] = React.useState<string>("");
  const { dispatch } = React.useContext(todoContext);
  const history = useHistory();
  const onSubmitFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { id: v4(), todo } });
    history.push("/");
  };
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card
        style={{ width: "18rem", height: "18rem" }}
        className="text-center d-flex justify-content-center align-items-center
         border"
      >
        <Form onSubmit={onSubmitFunction}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Todo name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Do homework"
              value={todo}
              onChange={(event) => {
                setTodo(event.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddUser;
