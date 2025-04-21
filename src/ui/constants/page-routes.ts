export const pageRoutes = {
  signIn: "/sign-in",
  oauth: "/oauth",
  home: "/",
  notFound: "*",
} as const;

export type PageRoutes = typeof pageRoutes;
