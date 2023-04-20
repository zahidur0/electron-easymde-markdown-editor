const { app, BrowserWindow } = require("electron");
const path = require("path");

let window;
const height = 390;
const width = 475;

app.whenReady().then(() => {
  window = new BrowserWindow({
    height: height,
    width: width,
    minWidth: 475,
    minHeight: 390,
    frame: false,
  });

  window.loadFile("index.html");
});
