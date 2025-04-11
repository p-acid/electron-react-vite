import { ipcRenderer } from "electron";

const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback: (statistics: any) => void) => {
    ipcRenderer.on("statistics", (_event, stats) => {
      callback(stats);
    });
    callback({});
  },
  getStaticData: () => ipcRenderer.invoke("getStaticData"),
});
