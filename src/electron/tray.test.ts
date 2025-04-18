import { expect, Mock, test, vi } from "vitest";
import { createTray } from "./tray.js";
import { app, BaseWindow, BrowserWindow, Menu, MenuItem } from "electron";

vi.mock("electron", () => {
  return {
    Tray: vi.fn().mockReturnValue({
      setContextMenu: vi.fn(),
    }),
    app: {
      getAppPath: vi.fn().mockReturnValue("/"),
      dock: {
        show: vi.fn(),
      },
      quit: vi.fn(),
    },
    Menu: {
      buildFromTemplate: vi.fn(),
    },
  };
});

const mainWindow = {
  show: vi.fn(),
} satisfies Partial<BrowserWindow> as unknown as BrowserWindow;

test("tray menu", () => {
  createTray(mainWindow);

  const calls = (Menu.buildFromTemplate as unknown as Mock).mock.calls;
  const args = calls[0] as Parameters<typeof Menu.buildFromTemplate>;
  const template = args[0];
  expect(template).toHaveLength(2);

  template[0].click?.(
    null as unknown as MenuItem,
    null as unknown as BaseWindow,
    null as unknown as KeyboardEvent
  );
  expect(mainWindow.show).toHaveBeenCalled();
  expect(app.dock?.show).toHaveBeenCalled();

  template[1].click?.(
    null as unknown as MenuItem,
    null as unknown as BaseWindow,
    null as unknown as KeyboardEvent
  );
  expect(app.quit).toHaveBeenCalled();
});
