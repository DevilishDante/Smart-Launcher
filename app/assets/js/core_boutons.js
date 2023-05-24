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
    // console.log(e)
    user(e)
});

document.querySelectorAll('[external-link]').forEach(link => {
    if (!link.getAttribute('external-link').length) return
    link.addEventListener('click', async (e) => {
        await window.link.open(link.getAttribute('external-link'))
    })
})

// Recup le nom du prog pour la fenêtre
window.addEventListener('load', async _ => {document.getElementById("title_name").textContent = await window.title.name()})