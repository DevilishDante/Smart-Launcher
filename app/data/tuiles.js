var data_tuiles = null
window.addEventListener('load', async () => {
    const tuilesStorage = await window.tuile_handler.load()
    if (tuilesStorage) {
        const tuiles = await window.tuile_handler.load()
        data_tuiles = JSON.parse(tuiles)
        data_tuiles.forEach(tuile => create_tuile(tuile.name, tuile.couleur, tuile.icon, tuile.chemin, tuile.img, tuile.id))
        if (data_tuiles.length === 0) {

            var nothing = document.getElementById('tuiles')
            var h2 = document.createElement('h2')
            nothing.appendChild(h2)
            h2.setAttribute('class', 'nothing-more');
            h2.setAttribute('id', 'nothing-more');
            h2.innerText = "Vous n'avez aucune tuile ,pour une créeer une, cliquez sur le + en bas de l'ecran 😎"
        }
    } else {
        await window.tuile_handler.initialize()
        console.log("créations du fichier en cours")
    }
})

