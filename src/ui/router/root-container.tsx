import { Outlet } from "react-router";
import { Toaster } from "sonner";

import Providers from "./providers";

function RootContainer() {
  return (
    <Providers>
      <Outlet />
      <Toaster richColors />
    </Providers>
  );
}

export default RootContainer;
