const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) => ipcOn("statistics", callback),
  getStaticData: () => ipcInvoke("getStaticData"),
  subscribeChangeView: (callback) => ipcOn("changeView", callback),
} satisfies Window["electron"]);

export function ipcInvoke<Key extends keyof EventPayloadMappding>(
  key: Key
): Promise<EventPayloadMappding[Key]> {
  return electron.ipcRenderer.invoke(key);
}

export function ipcOn<Key extends keyof EventPayloadMappding>(
  key: Key,
  callback: (payload: EventPayloadMappding[Key]) => void
) {
  const cb = (
    _: Electron.IpcRendererEvent,
    payload: EventPayloadMappding[Key]
  ) => callback(payload);
  electron.ipcRenderer.on(key, cb);
  return () => electron.ipcRenderer.off(key, cb);
}
