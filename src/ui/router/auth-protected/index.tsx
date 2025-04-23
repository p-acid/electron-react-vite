import { Navigate } from "react-router";

import { pageRoutes } from "@/ui/constants/page-routes";
import { useSession } from "@/ui/contexts/session-context/use-session";
import { PropsWithChildren } from "react";

function AuthProtected({ children }: PropsWithChildren) {
  const { session } = useSession();

  if (session === undefined) {
    return <div>Loading...</div>;
  }

  if (session === null) {
    return <Navigate to={pageRoutes.signIn} replace />;
  }

  return children;
}

export default AuthProtected;
