import { createRootRoute, Outlet } from "@tanstack/react-router";
import TopMenuBar from "../features/menuBar/TopMenuBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-gray-100 w-full h-full flex flex-col" >
        <TopMenuBar/>
        <Outlet />
      </div>
    </>
  ),
});
