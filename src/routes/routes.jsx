import Home from "@/Home/Home";
import Layout from "@/Layout/Layout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,

        loader: () => fetch("/Lawyer.json"),
        hydrateFallbackElement: <p>Ok</p>,
      },
    ],
  },
]);

export default router;
