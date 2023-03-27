const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path")
const fs = require('fs')

const appdata = (process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")) + `\\${require(__dirname + '/package.json').name}\\`

var window = null

const createWindow = () => {
    console.clear()
    window = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 1180,
        height: 800,
        minWidth: 1180,
        minHeight: 800,
        icon: path.join(__dirname, "./app/assets/img/logo.png"),
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    window.loadFile('./app/index.html')
}
app.whenReady().then(() => { createWindow() })
// Boutons de navigation : quitter, agrandir, reduire
ipcMain.handle('title_buttons:close', () => window.close())
ipcMain.handle('title_buttons:minimize', () => window.minimize())
ipcMain.handle('title_buttons:maximize', () => window.isMaximized() ? window.unmaximize() : window.maximize())
// ipcMain.handle('title_buttons:user', () => )
ipcMain.handle('title:name', () => window.title)
// actions tuilles
ipcMain.handle('click_action:tile_exe', () => window.open_exe())
ipcMain.handle('click_action:tile_folder', () => window.open_folder())
ipcMain.handle('click_action:tile_file', () => window.open_file())
// Tuiles
ipcMain.handle('tuiles:save', async (ignore, tuiles) => {
    const path = appdata + 'tuiles.json'
    try {
        await fs.promises.writeFile(path, JSON.stringify(tuiles, null, 4), 'utf8')
    } catch (error) {
        console.error(`Une erreur est survenue: ${error}`)
    }
})
ipcMain.handle('tuiles:load', async () => {
    const path = appdata + 'tuiles.json'
    try {
        return await fs.promises.readFile(path, { encoding: 'utf8' })
    } catch (error) {
        console.error(`Une erreur est survenue: ${error}`)
    }
})

ipcMain.handle('tuiles:initialize', async() => {
    const path = appdata + 'tuiles.json'
    try {
        await fs.promises.writeFile(path, JSON.stringify([]), { encoding: 'utf8' })
    } catch (error) {
        console.error(`Une erreur est survenue: ${error}`)
    }
})