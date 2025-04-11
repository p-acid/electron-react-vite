import { app, BrowserWindow, ipcMain } from "electron";
import { join } from "path";
import { isDev } from "./util.js";
import { getStaticData, pollResources } from "./resource-manager.js";
import { getPreloadPath } from "./path-resolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  const isDevelopment = isDev();

  if (isDevelopment) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(join(app.getAppPath(), "/dist-react/index.html"));
  }

  pollResources(mainWindow);

  ipcMain.handle("getStaticData", () => {
    return getStaticData();
  });
});
