export const pageRoutes = {
  signIn: "/sign-in",
  oauth: "/oauth",
  home: "/",
  notFound: "*",
  goal: "/goal",
  createGoal: "/goal/create",
  task: "/task",
} as const;

export type PageRoutes = typeof pageRoutes;
