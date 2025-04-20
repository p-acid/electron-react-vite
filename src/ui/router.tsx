import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import { HelloPage } from "./HelloPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hello",
    element: <HelloPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
