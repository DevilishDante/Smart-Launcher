//Ferme l'application
document.getElementById("close-btn").addEventListener("click",async (e) => {
    await window.title_buttons.close()
});
// Agrandi la fenêtre
document.getElementById("maximize-btn").addEventListener("click",async (e) => {
    await window.title_buttons.maximize()
});
// Reduit la fenetre
document.getElementById("minimize-btn").addEventListener("click",async (e) => {
    await window.title_buttons.minimize()
});
// ouvre le menu user
document.getElementById("user-btn").addEventListener("click",async (e) => {
    user(e)
});

// Recup le nom du prog pour la fenêtre
Window;addEventListener('load', async _ => {document.getElementById("title_name").textContent = await window.title.name()})

document.getElementById("click-action").addEventListener("click", async (e) => {
    await window.click_action.tile_file()
});

// document.getElementById("kp-btn").addEventListener("click", (e) => {
//     document.loadURL(url.format({
//         pathname: path.join(__dirname, 'raccourcis/KeePassXC.exe - Raccourci'),
//         protocol: 'file:',
//         slashes: true
//       }))
// });

// recuperer folder
// $(document).ready(function () 
// {
//     $.get(".", function(data) 
//     {
//         $("#fileNames"