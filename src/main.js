const { app } = require('electron')
const { createMainWindow } = require('./modules/windowManager');
const { handleMinimize } = require('./modules/handlers/handleMinimize');
const { handleClose } = require('./modules/handlers/handleClose');
const { handleHash } = require('./modules/handlers/handleHash');
const { handleOpenFileDialog } = require('./modules/handlers/handleOpenFileDialog');

app.on('ready', function() {
   createMainWindow()
});

handleOpenFileDialog()
handleClose()
handleMinimize()
handleHash()



