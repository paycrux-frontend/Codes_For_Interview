import { Outlet } from "react-router";
import { Nav } from "../";

export default function NavOutlet() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
