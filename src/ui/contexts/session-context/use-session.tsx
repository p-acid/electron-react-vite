import { Session } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

export const SessionContext = createContext<{
  session: Session | null | undefined;
}>({
  session: null,
});

export function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return context;
}
