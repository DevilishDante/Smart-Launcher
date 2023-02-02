data_tuiles.forEach(tuile => create_tuile(tuile.name,tuile.couleur,tuile.icon,tuile.chemin,tuile.img,tuile.id))

function create_tuile (name="Aucun Titre",bg="#ffff", icon="mescouilles", chemin="/", img="non", id) {
    console.log(name,bg,icon,chemin,img)
    let carte_div = document.createElement('div')
    carte_div.dataset.id = id
    carte_div.dataset.name = name
    carte_div.classList.add('col-md-3')
    carte_div.classList.add('col-sm-6')
    carte_div.style.marginTop = "15px"
    carte_div.style.marginBottom = "15px"
    let carte_a = document.createElement('a')
    carte_a.classList.add('box-dashboard')
    carte_a.classList.add('btn-box')
    carte_a.classList.add('btn-block')
    carte_a.style.backgroundColor = bg
    // carte_a.href = chemin
    // carte_a.addEventListener("click", () => click_exec(chemin))
    carte_a.addEventListener("contextmenu",function() {return monmenu(this)})
    let carte_img
    let carte_span
    if (img == "non"){
        carte_span = document.createElement('span')
        carte_span.classList.add('material-icons')
        carte_span.style.fontSize = "100%"
        carte_span.textContent = icon
    } else {
        carte_img = document.createElement('img')
        carte_img.classList.add('img-b')
        carte_img.src = img
        carte_img.alt = img
    }

    let carte_hr = document.createElement('hr')
    let carte_h3 = document.createElement('h3')
    carte_h3.classList.add('txt-dash')
    carte_h3.textContent = name
    
    if (img == "non") {
        carte_a.appendChild(carte_span)
    } else {    
        carte_a.appendChild(carte_img)
    }

    carte_a.appendChild(carte_hr)
    carte_a.appendChild(carte_h3)
    carte_div.appendChild(carte_a)
    document.getElementById("tuiles").appendChild(carte_div)
}

// function edit_tuile(name="Aucun Titre",bg="#ffff", icon="mescouilles", chemin="/", img="non") {
//     FileSystemEntry.replace("test",name)
// }

// function remove_tuile(name="Aucun Titre",bg="#ffff", icon="mescouilles", chemin="/", img="non") {

// }

function create_context_tuile(name,bg,img,chemin,icon) {
    data_tuiles.push({
        id: data_tuiles.length,
        name: name,
        couleur: bg,
        img: img,
        chemin: chemin,
        icon: icon,
    })
}