import { createBrowserRouter, RouterProvider } from "react-router";

import { pageRoutes } from "./constants/page-routes";
import {
  ErrorPage,
  HomePage,
  NotFoundPage,
  OauthPage,
  SignInPage,
} from "./pages";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: pageRoutes.signIn,
        element: <SignInPage />,
      },
      {
        path: pageRoutes.home,
        element: <HomePage />,
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
