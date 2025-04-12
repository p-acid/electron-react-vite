import { ipcInvoke, ipcOn } from "./util";

const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) => ipcOn("statistics", callback),
  getStaticData: () => ipcInvoke("getStaticData"),
} satisfies Window["electron"]);
