// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require("electron-is-dev");
const Store = require('electron-store');
const store = new Store();
// const Window = require('./window');
// console.log(store.get('alert.time.sc'));

let mainWindow;
let subWindow;

  
function createWindow(){
    mainWindow = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        }
    });
    mainWindow.loadURL(isDev ? 'http://localhost:3000':`file://${path.join(__dirname, "../public/index.html")}`);
    return true;
}
function createSubWindow(){
    let _subWindow = new BrowserWindow({
        width: 480,
        height: 480,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        }
    });
    _subWindow.loadURL(isDev
        ? 'http://localhost:3000#/add'
        : `file://${path.join(__dirname, '../build/index.html')}#/add`);
    _subWindow.on('closed', ()=>{subWindow=null});
    return _subWindow;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

ipcMain.handle('load-alert', async ()=>{
    if (!subWindow) {
        subWindow = createSubWindow();
    }
});

ipcMain.handle('get-alers', async ()=>{
    return store.get('alerts', []);
})

ipcMain.handle('create-alert', async (data)=>{
    return;
});
ipcMain.handle('delete-alert', async (target)=>{
    return;
});
ipcMain.handle('activate-alert', async (target)=>{
    return;
});
ipcMain.handle('deactivate-alert', async (target)=>{
    return;
});
ipcMain.handle('set-sound-alert', async (target)=>{
    return;
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.