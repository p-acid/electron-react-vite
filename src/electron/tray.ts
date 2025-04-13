import { app, BrowserWindow, Menu, Tray } from "electron";
import { join } from "path";
import { getAssetPath } from "./path-resolver.js";

export function createTray(mainWindow: BrowserWindow) {
  const tray = new Tray(
    join(
      getAssetPath(),
      process.platform === "darwin" ? "trayIconTemplate.png" : "trayIcon.png"
    )
  );

  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: "Show",
        click: () => {
          mainWindow.show();
          if (app.dock) {
            app.dock.show();
          }
        },
      },
      {
        label: "Quit",
        click: () => app.quit(),
      },
    ])
  );
}
