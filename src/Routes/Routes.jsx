import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Components/Home";
import Register from "../Components/Register";
import SignIn from "../Components/SignIn";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
            path: '/signIn',
            element: <SignIn />
        },
        {
            path: '/register',
            element: <Register />
        },
      ]
    }
  ]);

const Routs = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Routs;