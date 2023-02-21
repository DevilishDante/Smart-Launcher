var data_tuiles = null

window.addEventListener('load', async () => {
    const tuiles = await window.tuile_handler.load()
    data_tuiles = JSON.parse(tuiles)
    data_tuiles.forEach(tuile => create_tuile(tuile.name, tuile.couleur, tuile.icon, tuile.chemin, tuile.img, tuile.id))
})