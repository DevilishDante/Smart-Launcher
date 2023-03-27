var data_tuiles = null
window.addEventListener('load', async () => {
    const tuilesStorage = await window.tuile_handler.load()
    if (tuilesStorage) {
        const tuiles = await window.tuile_handler.load()
        data_tuiles = JSON.parse(tuiles)
        data_tuiles.forEach(tuile => create_tuile(tuile.name, tuile.couleur, tuile.icon, tuile.chemin, tuile.img, tuile.id))
        if (data_tuiles.length === 0) {

            var nothing = document.getElementById('tuiles')
            var h1 = document.createElement('h1')
            h1.innerText = "Vous n'avez aucune tuile ,pour une créeer une, cliquez sur le + en bas de l'ecran 😎"
            h1.appendChild(nothing)

        }
    } else {
        await window.tuile_handler.initialize()
        console.log("créations du fichier en cours")
    }
})

