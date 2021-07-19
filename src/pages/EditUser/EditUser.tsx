import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { todoContext } from "../../provider/TodoProvider";
type TState = { id: string; todo: string } | undefined;
const EditUser = () => {
  const { todoLists, dispatch } = React.useContext(todoContext);
  const { id } = useParams<{ id: string }>();
  const [editableTodo, setEditableTodo] = React.useState<TState>();
  const [newTodoValue, setNewTodoValue] = React.useState<string | undefined>(
    ""
  );
  React.useEffect(() => {
    const editTodo: TState = todoLists.find((item) => item.id === id);
    setEditableTodo(editTodo);
    setNewTodoValue(editTodo?.todo);
  }, [id]);
  const history = useHistory();
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "EDIT_TODO", payload: { id, todo: newTodoValue } });
    history.push("/");
  };
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card
        style={{ width: "18rem", height: "18rem" }}
        className="text-center d-flex justify-content-center align-items-center
     border"
      >
        <Form onSubmit={(e) => handleOnSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Todo name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Do homework"
              defaultValue={editableTodo?.todo}
              value={newTodoValue}
              onChange={(e) => setNewTodoValue(e.target.value)}
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

export default EditUser;
