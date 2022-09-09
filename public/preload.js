const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('alertAPI',{
    get: ()=>ipcRenderer.invoke('get-alerts'),
    create: (data)=>ipcRenderer.invoke('create-alert'),
    delete: (target)=>ipcRenderer.invoke('delete-alert'),
    activate: (target)=>ipcRenderer.invoke('activate-alert'),
    deactivate: (target)=>ipcRenderer.invoke('deactivate-alert'),
    setSound: (target, filePath)=>ipcRenderer.invoke('set-sound-alert'),
});

// const updateOnlineStatus = () => {
//     document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline';
// }
// const NOTIFICATION_TITLE = 'Title'
// const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
// const CLICK_MESSAGE = 'Notification clicked!'

// new Notification(NOTIFICATION_TITLE, {body: NOTIFICATION_BODY}).onclick = () => {
//     document.getElementById('status').innerHTML = CLICK_MESSAGE
// }
// window.addEventListener('online', updateOnlineStatus);
// window.addEventListener('offline', updateOnlineStatus);

// updateOnlineStatus();


// window.addEventListener('DOMContentLoaded', () =>{
//     const {ipcRenderer} = require('electron');
//     ipcRenderer.on('asynchronous-reply', (ev, arg)=>{
//         console.log(arg);
//     });
//     const b1 = document.getElementById('create-alert');
//     b1.addEventListener('click', ()=>{
//         ipcRenderer.send('asynchronous-message', 'ping')
//     });
// })