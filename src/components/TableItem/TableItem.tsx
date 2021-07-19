import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { todoContext } from "../../provider/TodoProvider";

const TableItem = () => {
  const { todoLists, dispatch, filterdListsText } = useContext(todoContext);
  const handleDelete = (id: string) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };
  return (
    <>
      {todoLists.filter((item) =>
        item.todo.toLowerCase().includes(filterdListsText.toLowerCase())
      ).length > 0 ? (
        todoLists
          .filter((item) =>
            item.todo.toLowerCase().includes(filterdListsText.toLowerCase())
          )
          .map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.todo}</td>
                <td>
                  <Link to={`/edit/${item.id}`} className="btn btn-warning">
                    Edit
                  </Link>
                  <Button
                    className="btn btn-danger mx-3"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })
      ) : (
        <tr>
          <td colSpan={2} className="text-center">
            Nothing to show :/
          </td>
        </tr>
      )}
    </>
  );
};

export default TableItem;
