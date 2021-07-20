import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { todoContext } from "../../provider/TodoProvider";
import SearchInput from "../SearchInput/SearchInput";
import "./Header.styles.css";
const Header = () => {
  const { dispatch } = React.useContext(todoContext);
  const handleChangePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "PRIORITY_FILTER",
      payload: { priority: e.target.value },
    });
  };
  return (
    <div
      className="headerContainer
     d-flex justify-content-center align-items-center"
    >
      <Container>
        <Row>
          <Col sm={8}>
            <div className="inputSearch">
              <SearchInput />
            </div>
          </Col>
          <Col>
            <div className="inputSearch text-center">
              <select name="filter" id="filter" onChange={handleChangePriority}>
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </Col>
          <Col className="text-center">
            <div className="btnAddNote">
              <Link className="btn btn-success" to="/adduser">
                Add note
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
