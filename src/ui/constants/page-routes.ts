export const pageRoutes = {
  signIn: "/sign-in",
  home: "/",
} as const;

export type PageRoutes = typeof pageRoutes;
