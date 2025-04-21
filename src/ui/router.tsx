import { createBrowserRouter, RouterProvider } from "react-router";

import { pageRoutes } from "./constants/page-routes";
import { HomePage, OauthPage, SignInPage } from "./pages";

const router = createBrowserRouter([
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
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
