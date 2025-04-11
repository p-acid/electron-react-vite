import { app, BrowserWindow } from "electron";
import { join } from "path";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadFile(join(app.getAppPath(), "/dist-react/index.html"));
});
