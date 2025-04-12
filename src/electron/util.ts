import {
  ipcMain,
  ipcRenderer,
  IpcRendererEvent,
  WebContents,
  WebFrameMain,
} from "electron";
import { getUIPath } from "./path-resolver.js";
import { pathToFileURL } from "url";

export function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

export function ipcMainHandle<Key extends keyof EventPayloadMappding>(
  key: Key,
  handler: () => EventPayloadMappding[Key]
) {
  ipcMain.handle(key, (event) => {
    if (event.senderFrame !== null) {
      validateEventFrame(event.senderFrame);
    }
    return handler();
  });
}

export function ipcWebContentsSend<Key extends keyof EventPayloadMappding>(
  key: Key,
  webContents: WebContents,
  payload: EventPayloadMappding[Key]
) {
  webContents.send(key, payload);
}

export function ipcInvoke<Key extends keyof EventPayloadMappding>(
  key: Key
): Promise<EventPayloadMappding[Key]> {
  return ipcRenderer.invoke(key);
}

export function ipcOn<Key extends keyof EventPayloadMappding>(
  key: Key,
  callback: (payload: EventPayloadMappding[Key]) => void
) {
  const cb = (_: IpcRendererEvent, payload: EventPayloadMappding[Key]) =>
    callback(payload);
  ipcRenderer.on(key, cb);
  return () => ipcRenderer.off(key, cb);
}

export function validateEventFrame(frame: WebFrameMain) {
  if (isDev() && new URL(frame.url).host === "localhost:5123") {
    return;
  }

  if (frame.url !== pathToFileURL(getUIPath()).toString()) {
    throw new Error("Malicious event");
  }
}
