import { Outlet } from "react-router";
import { Toaster } from "sonner";

import Providers from "./providers";

function RootContainer() {
  return (
    <Providers>
      <Outlet />
      <Toaster />
    </Providers>
  );
}

export default RootContainer;
