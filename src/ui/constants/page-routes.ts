export const pageRoutes = {
  signIn: "/sign-in",
  oauth: "/oauth",
  home: "/",
} as const;

export type PageRoutes = typeof pageRoutes;
