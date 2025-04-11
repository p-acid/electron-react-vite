import { app, BrowserWindow } from "electron";
import { join } from "path";
import { isDev } from "./util.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({});

  const isDevelopment = isDev();

  if (isDevelopment) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(join(app.getAppPath(), "/dist-react/index.html"));
  }
});
