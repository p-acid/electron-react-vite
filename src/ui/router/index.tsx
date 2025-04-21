import { createBrowserRouter, RouterProvider } from "react-router";

import { pageRoutes } from "../constants/page-routes";
import {
  ErrorPage,
  HomePage,
  NotFoundPage,
  OauthPage,
  SignInPage,
} from "../pages";
import AuthProtected from "./auth-protected";
import Providers from "./providers";

const router = createBrowserRouter([
  {
    element: <Providers />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AuthProtected />,
        children: [
          {
            path: pageRoutes.home,
            element: <HomePage />,
          },
        ],
      },

      {
        path: pageRoutes.signIn,
        element: <SignInPage />,
      },
      {
        path: pageRoutes.oauth,
        element: <OauthPage />,
      },
      {
        path: pageRoutes.notFound,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
