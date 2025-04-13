import { ipcMain, WebContents, WebFrameMain } from "electron";
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

export function ipcMainOn<Key extends keyof EventPayloadMappding>(
  key: Key,
  handler: (payload: EventPayloadMappding[Key]) => void
) {
  ipcMain.on(key, (event, payload) => {
    if (event.senderFrame) {
      validateEventFrame(event.senderFrame);
    }
    return handler(payload);
  });
}

export function ipcWebContentsSend<Key extends keyof EventPayloadMappding>(
  key: Key,
  webContents: WebContents,
  payload: EventPayloadMappding[Key]
) {
  webContents.send(key, payload);
}

export function validateEventFrame(frame: WebFrameMain) {
  if (isDev() && new URL(frame.url).host === "localhost:5123") {
    return;
  }

  if (frame.url !== pathToFileURL(getUIPath()).toString()) {
    throw new Error("Malicious event");
  }
}
