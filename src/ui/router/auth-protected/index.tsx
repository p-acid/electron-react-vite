import { Navigate, Outlet } from "react-router";

import { pageRoutes } from "@/ui/constants/page-routes";
import { useSession } from "@/ui/contexts/session-context/use-session";

function AuthProtected() {
  const { session } = useSession();

  if (session === undefined) {
    return <div>Loading...</div>;
  }

  if (session === null) {
    return <Navigate to={pageRoutes.signIn} replace />;
  }

  return <Outlet />;
}

export default AuthProtected;
