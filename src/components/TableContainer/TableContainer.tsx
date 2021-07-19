import React from "react";
import { Table } from "react-bootstrap";
import TableItem from "../TableItem/TableItem";

const TableContainer = () => {
  return (
    <div className="m-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <TableItem />
      </Table>
    </div>
  );
};

export default TableContainer;
