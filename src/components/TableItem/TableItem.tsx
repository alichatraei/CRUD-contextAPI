import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { todoContext } from "../../provider/TodoProvider";

const TableItem = () => {
  const { todoLists } = useContext(todoContext);
  return (
    <>
      {todoLists.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.todo}</td>
            <td>
              <Link to={`/edit/${item.id}`} className="btn btn-warning">
                Edit
              </Link>
              <Button className="btn btn-danger mx-3">Delete</Button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableItem;
