export const pageRoutes = {
  signIn: "/sign-in",
  oauth: "/oauth",
  home: "/",
  notFound: "*",
  goal: "/goal",
  createGoal: "/goal/create",
  createOkr: "/goal/create/okr",
  createMandalart: "/goal/create/mandalart",
  task: "/task",
} as const;

export type PageRoutes = typeof pageRoutes;
