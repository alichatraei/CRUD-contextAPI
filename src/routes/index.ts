import { TRoutes } from "../types";
const Routes: TRoutes = [
  {
    path: "/",
    exact: true,
    page: "Home",
  },
  {
    path: "/adduser",
    page: "AddUser",
  },
  {
    path: "/edit/:id",
    exact: true,
    page: "EditUser",
  },
];
export default Routes;
