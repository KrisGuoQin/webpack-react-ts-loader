import { createBrowserRouter, type RouteObject } from "react-router-dom";

import { Layout } from "@/components";
import { Home, Login, Test1, Test2 } from "./pages";
import { lazy } from "react";

const isDev = process.env.NODE_ENV;
const HomeLazy = lazy(() => import("@/pages/home"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "home",
        // element: isDev ? <Home /> : <HomeLazy />,
        // element: <HomeLazy />,
        async lazy() {
          const { Home } = await import("@/pages/home");
          return {
            Component: Home,
          };
        },
      },
      {
        path: "test-1",
        element: <Test1 />,
      },
      {
        path: "test-2",
        element: <Test2 />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export const router = createBrowserRouter(
  routes
  //   routes.map((item) => {
  //     if (isDev) {
  //       delete item.lazy;
  //     } else if (item.lazy) {
  //       delete item.element;
  //     }
  //     return item;
  //   })
);
