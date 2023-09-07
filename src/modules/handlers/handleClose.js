const { BrowserWindow, ipcMain } = require('electron')

// Закрытие окна
function handleClose() {
    ipcMain.on('close-window', (event, arg) => {
        const window = BrowserWindow.getFocusedWindow();
        window.close();
    });
}

module.exports = { handleClose }