const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path")

var window = null

const createWindow = () => {
    window = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 1180,
        height: 800,
        minWidth: 1180,
        minHeight: 800,
        icon: path.join(__dirname,"./app/assets/img/logo.png"),
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    window.loadFile('./app/index.html')
    }
app.whenReady().then(() => {createWindow()})
// Boutons de navigation : quitter, agrandir, reduire
ipcMain.handle('title_buttons:close', () => window.close())
ipcMain.handle('title_buttons:minimize', () => window.minimize())
ipcMain.handle('title_buttons:maximize', () => window.isMaximized()?window.unmaximize():window.maximize())
// ipcMain.handle('title_buttons:user', () => )
ipcMain.handle('title:name', () => window.title)
// actions tuilles
ipcMain.handle('click_action:tile_exe', () => window.open_exe())
ipcMain.handle('click_action:tile_folder', () => window.open_folder())
ipcMain.handle('click_action:tile_file', () => window.open_file())