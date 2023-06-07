const {app, BrowserWindow} = require('electron')
// Main process

const path = require('path')
const url = require('url')
// requre('electron-reload')(__dirname);

let win
function createWindow() {
    win = new BrowserWindow({width: 800, height: 600, frame: false}) // Create the browser window.
    win.loadURL(url.format({ // and load the index.html of the app.
        pathname: path.join(__dirname, './src/index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.on('closed', () => { // Emitted when the window is closed.
        win = null
    })

    // win.webContents.openDevTools() // Open the DevTools.

}

app.on('ready', createWindow) // This method will be called when Electron has finished initialization.  

app.on('window-all-closed', () => { // Quit when all windows are closed.
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => { // On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.   
    if (win === null) {
        createWindow()
    }
})