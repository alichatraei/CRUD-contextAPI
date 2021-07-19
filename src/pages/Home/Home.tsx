import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Header from "../../components/Header/Header";
const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
