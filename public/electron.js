// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron');
const path = require('path');
const isDev = require("electron-is-dev");
const Store = require('electron-store');
const store = new Store();
// console.log(store.get('alert.time.sc'));

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWindow.loadURL(
    isDev
    ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

function createSubWindow(){
  const subWindow = new BrowserWindow({
    width: 400,
    height: 400,
  });
  subWindow.loadURL(
    `file://${path.join(__dirname, "../build/add.html")}`
  )
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  document.getElementById('create-alert').addEventListener('click', ()=>{
    ipcRenderer.send('add-alert');
  })
})

ipcMain.on('add-alert', ()=>{
  createSubWindow();
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.