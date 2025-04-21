import { SessionProvider } from "../contexts/session-context";
import { PropsWithChildren } from "react";

function Providers({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Providers;
