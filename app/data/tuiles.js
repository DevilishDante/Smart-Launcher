var data_tuiles = null
window.addEventListener('load', async () => {
    const tuilesStorage = await window.tuile_handler.load()
    if (tuilesStorage) {
        const tuiles = await window.tuile_handler.load()
        data_tuiles = JSON.parse(tuiles)
        data_tuiles.forEach(tuile => create_tuile(tuile.name, tuile.couleur, tuile.icon, tuile.chemin, tuile.img, tuile.id))
        if (data_tuiles.length === 0) {

            var nothing = document.getElementById('tuiles')
            var div = document.createElement('div')
            nothing.appendChild(div)
            div.setAttribute('class', 'nothing-more');
            div.setAttribute('id', 'nothing-more');
            div.innerHTML = '<h2>C\'est le moment d\'ajouter une tuile 😎</h2><button type="button" class="btn-nav-b btn-text btn-upsidedown" data-toggle="modal" data-target=".bd-example-modal-lg">J\'en ajoute une !<span class="material-icons">add_box</span></button>'
        }
    } else {
        initTuile()
        console.log("créations du fichier en cours")
    }
})

async function initTuile(){
    return await window.tuile_handler.initialize()
}

