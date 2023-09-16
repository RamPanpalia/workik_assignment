const { win, BrowserWindow, app } = require('electron');

function createWindow(){
    const win= new BrowserWindow({
        icon: 'src/assets/exchange-money-icon.ico',
        width:1200,
        height:800,
        backgroundColor:"white",
        webPreferences:{
            nodeIntegration:false,
            worldSafeExcecuteJavaScript:true,
            contextIsolation:true,
        }
    })
    win.maximize();
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);