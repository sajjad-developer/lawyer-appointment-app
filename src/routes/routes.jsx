import SpinnerPinwheel from "@/components/SpinnerPinWheel";
import MainLayout from "@/Layouts/MainLayout";
import Blogs from "@/pages/Blogs";
import ContactUS from "@/pages/ContactUS";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import MyBookings from "@/pages/MyBookings";
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

        loader: () => fetch("lawyers.json"),
        hydrateFallbackElement: <SpinnerPinwheel></SpinnerPinwheel>,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/my-bookings",
        Component: MyBookings,
      },
      {
        path: "/contact-us",
        Component: ContactUS,
      },
    ],
  },
]);

export default router;
