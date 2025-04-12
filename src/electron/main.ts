import { app, BrowserWindow } from "electron";

import { ipcMainHandle, isDev } from "./util.js";
import { getStaticData, pollResources } from "./resource-manager.js";
import { getPreloadPath, getUIPath } from "./path-resolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(getUIPath());
  }

  pollResources(mainWindow);

  ipcMainHandle("getStaticData", () => getStaticData());
});
