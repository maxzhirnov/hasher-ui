const { BrowserWindow, ipcMain } = require('electron')

function handleMinimize() {
    // Свернуть окно
    ipcMain.on('minimize-window', (event, arg) => {
        const window = BrowserWindow.getFocusedWindow();
        window.minimize();
    });
}

module.exports = { handleMinimize }