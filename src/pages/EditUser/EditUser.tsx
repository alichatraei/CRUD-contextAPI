import React from "react";
import { Button, Card, Form } from "react-bootstrap";
const EditUser = () => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Card
        style={{ width: "18rem", height: "18rem" }}
        className="text-center d-flex justify-content-center align-items-center
     border"
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Todo name</Form.Label>
            <Form.Control type="text" placeholder="Do homework" />
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
