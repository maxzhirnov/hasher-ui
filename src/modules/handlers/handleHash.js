const { ipcMain } = require('electron')
const { spawn } = require('child_process'); // Для запуска hasher бинарника
const { addPrefixToFilename } = require('../helpers');

function handleHash() {
    // Запуск hasher бинарника
    ipcMain.on('selected-file', (event, pathToFile) => {
        // Запуск Go приложения с путем к файлу в качестве аргумента
        const goApp = spawn('./bin/hasher', ["-i", pathToFile, "-o", addPrefixToFilename(pathToFile, "out_")]);
    
        goApp.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
    
        goApp.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });
    
        goApp.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    });
}

module.exports = { handleHash }