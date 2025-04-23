import { createBrowserRouter, RouterProvider } from "react-router";

import { pageRoutes } from "../constants/page-routes";
import {
  CreateGoalPage,
  ErrorPage,
  GoalPage,
  HomePage,
  NotFoundPage,
  OauthPage,
  SignInPage,
  TaskPage,
} from "../pages";
import AuthProtected from "./auth-protected";
import RootContainer from "./root-container";
import { SidebarLayout } from "../components";

const router = createBrowserRouter([
  {
    element: <RootContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: (
          <AuthProtected>
            <SidebarLayout />
          </AuthProtected>
        ),
        children: [
          {
            path: pageRoutes.home,
            element: <HomePage />,
          },
          {
            path: pageRoutes.goal,
            element: <GoalPage />,
          },
          {
            path: pageRoutes.createGoal,
            element: <CreateGoalPage />,
          },
          {
            path: pageRoutes.task,
            element: <TaskPage />,
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
