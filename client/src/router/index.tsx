import { createBrowserRouter } from "react-router-dom";
import { Home, Layout, Login, Signup } from "../pages";
import ContactUs from "../pages/ContactUS/ContactUs";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactUs/>
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
