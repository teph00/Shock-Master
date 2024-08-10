const { app, BrowserWindow } = require("electron/main");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1240,
    height: 720,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: true,
      // preload: path.join(__dirname, "preload.js"), // TODO: Add preload.js
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
