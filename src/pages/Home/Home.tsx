import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Header from "../../components/Header/Header";
import TableContainer from "../../components/TableContainer/TableContainer";
import { todoContext } from "../../provider/TodoProvider";
const Home: React.FC<RouteComponentProps> = () => {
  const { todoLists } = React.useContext(todoContext);
  console.log(todoLists);
  return (
    <div>
      <Header />
      <TableContainer />
    </div>
  );
};

export default Home;
