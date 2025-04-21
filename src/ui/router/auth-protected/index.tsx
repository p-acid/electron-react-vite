import { Outlet, redirect } from "react-router";

import { pageRoutes } from "@/ui/constants/page-routes";
import { useSession } from "@/ui/contexts/session-context/use-session";

function AuthProtected() {
  const { session } = useSession();

  if (!session) {
    redirect(pageRoutes.signIn);
    return;
  }

  return <Outlet />;
}

export default AuthProtected;
