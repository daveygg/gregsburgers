import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../features/navbar/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-gray-100 w-full h-full flex flex-col" >
        <Navbar/>
        <Outlet />
      </div>
    </>
  ),
});
