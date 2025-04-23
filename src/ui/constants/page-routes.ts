export const pageRoutes = {
  signIn: "/sign-in",
  oauth: "/oauth",
  home: "/",
  notFound: "*",
  goal: "/goal",
  task: "/task",
} as const;

export type PageRoutes = typeof pageRoutes;
