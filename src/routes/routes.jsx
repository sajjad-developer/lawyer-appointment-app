import MainLayout from "@/Layouts/MainLayout";
import Blogs from "@/pages/Blogs";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        Component: Home,

        loader: () => fetch("/Lawyer.json"),
        hydrateFallbackElement: <p>Ok</p>,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
    ],
  },
]);

export default router;
