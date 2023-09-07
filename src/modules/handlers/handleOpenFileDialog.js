const { ipcMain, dialog } = require('electron')

function handleOpenFileDialog() {
    // Для работы FileSelector
    ipcMain.handle('open-file-dialog', async (event) => {
        const result = await dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [{ extensions: ['csv'] }]
        });
    
        if (!result.canceled && result.filePaths.length > 0) {
        return result.filePaths[0];
        }
    
        return null;
    });
}

module.exports = { handleOpenFileDialog }