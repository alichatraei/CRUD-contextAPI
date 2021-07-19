import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TableItem = () => {
  return (
    <>
      <tbody>
        <tr>
          <td>Do homework</td>
          <td>
            <Link to="/edit/1" className="btn btn-warning">
              Edit
            </Link>
            <Button className="btn btn-danger mx-3">Delete</Button>
          </td>
        </tr>
        <tr className="text-center">
          <td>Do homework</td>
          <td>
            <Link to="/edit/1" className="btn btn-warning">
              Edit
            </Link>
            <Button className="btn btn-danger mx-3">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>Do homework</td>
          <td>
            <Link to="/edit/1" className="btn btn-warning">
              Edit
            </Link>
            <Button className="btn btn-danger mx-3">Delete</Button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TableItem;
