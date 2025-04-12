import { app } from "electron";
import { join } from "path";
import { isDev } from "./util.js";

export function getPreloadPath() {
  return join(
    app.getAppPath(),
    isDev() ? "." : "..",
    "/dist-electron/preload.cjs"
  );
}

export function getUIPath(): string {
  return join(app.getAppPath(), "/dist-react/index.html");
}
