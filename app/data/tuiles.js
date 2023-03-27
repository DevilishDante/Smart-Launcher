var data_tuiles = null
window.addEventListener('load', async () => {
    const tuilesStorage = await window.tuile_handler.load()
    if (tuilesStorage) {
        const tuiles = await window.tuile_handler.load()
        data_tuiles = JSON.parse(tuiles)
        data_tuiles.forEach(tuile => create_tuile(tuile.name, tuile.couleur, tuile.icon, tuile.chemin, tuile.img, tuile.id))
        if (!data_tuiles.length) {
            NoTuileAdd()
        }
    } else {
        initTuile()
        console.log("créations du fichier en cours")
    }
})
async function initTuile(){
    return await window.tuile_handler.initialize()
}