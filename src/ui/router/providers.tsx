import { Outlet } from "react-router";
import { SessionProvider } from "../contexts/session-context";

function Providers() {
  return (
    <SessionProvider>
      <Outlet />
    </SessionProvider>
  );
}

export default Providers;
