const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // we can also expose variables, not just functions
})
contextBridge.exposeInMainWorld('title_buttons', {
  close: () => ipcRenderer.invoke('title_buttons:close'),
  maximize: () => ipcRenderer.invoke('title_buttons:maximize'),
  minimize: () => ipcRenderer.invoke('title_buttons:minimize'),
})
contextBridge.exposeInMainWorld('title', {
  name: () => ipcRenderer.invoke('title:name'),
})
contextBridge.exposeInMainWorld('click_action',{
  tile_exe: () => ipcRenderer.invoke('click_action:tile_exe'),
  tile_file: () => ipcRenderer.invoke('click_action:tile_file'),
  tile_folder: () => ipcRenderer.invoke('click_action:tile_folder')
})