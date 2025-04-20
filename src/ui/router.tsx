import { createBrowserRouter, RouterProvider } from "react-router";

import { pageRoutes } from "./constants/page-routes";
import HomePage from "./pages/home";
import SignInPage from "./pages/sign-in";

const router = createBrowserRouter([
  {
    path: pageRoutes.signIn,
    element: <SignInPage />,
  },
  {
    path: pageRoutes.home,
    element: <HomePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
