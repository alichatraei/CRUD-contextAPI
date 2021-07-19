import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import SearchInput from "../SearchInput/SearchInput";
import "./Header.styles.css";
const Header = () => {
  return (
    <div
      className="headerContainer
     d-flex justify-content-center align-items-center"
    >
      <Container>
        <Row>
          <Col sm={10}>
            <div className="inputSearch">
              <SearchInput />
            </div>
          </Col>
          <Col className="text-center">
            <div className="btnAddNote">
              <Button variant="success">Add Note</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
