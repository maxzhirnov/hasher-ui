const { BrowserWindow } = require('electron');

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('dist/index.html');
}

module.exports = { createMainWindow };
