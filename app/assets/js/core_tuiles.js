function create_tuile (name ,bg, icon, chemin,img, id) {
    var nothingRem = document.getElementById('nothing-more')
    if (nothingRem) {
        nothingRem.remove()
    }
    
    
    let carte_div = document.createElement('div')
    carte_div.dataset.id = id
    carte_div.dataset.name = name
    let carte_content = document.createElement('div')
    carte_div.classList.add('box-dashboard')
    carte_div.classList.add('box-d-4')
    carte_div.style.backgroundColor = bg

    carte_content.addEventListener("contextmenu",function() {return monmenu(this,id)})
    let carte_img
    let carte_span
    if (img == "non"){
        carte_span = document.createElement('span')
        carte_span.classList.add('material-icons')
        carte_span.style.fontSize = "11rem"
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
        carte_content.appendChild(carte_span)
    } else {    
        carte_content.appendChild(carte_img)
    }

    carte_div.appendChild(carte_content)
    carte_div.appendChild(carte_hr)
    carte_div.appendChild(carte_h3)
    document.getElementById("tuiles").appendChild(carte_div)
}

function create_context_tuile(name,bg,icon,chemin,img) {
    data_tuiles.push({
        id: data_tuiles.length,
        name: name,
        couleur: bg,
        img: img,
        chemin: chemin,
        icon: icon,
    })
    window.tuile_handler.save(data_tuiles)
}
function NoTuileAdd() {
    var nothing = document.getElementById('tuiles')
    var div = document.createElement('div')
    nothing.appendChild(div)
    div.setAttribute('class', 'nothing-more');
    div.setAttribute('id', 'nothing-more');
    div.innerHTML = '<h2>C\'est le moment d\'ajouter une tuile 😎</h2><button type="button" class="nothing-btn btn-nav-b btn-text btn-upsidedown" data-toggle="modal" data-target=".bd-example-modal-lg"><span class="material-icons">add_box</span> J\'en ajoute une !</button>'
}

// /**
//  * @param {{tuile_name, tuile_couleur, tuile_chemin, tuile_icon}} data
//  */
// function getFormData(data) {
//     const name = data.tuile_name || 'Aucun Titre'
//     const couleur = data.tuile_couleur || 'black'
//     const img = data.tuile_img || 'non'
//     const chemin = data.tuile_chemin || '/'
//     const icon = data.tuile_icon || 'help'
//     data = {tuile_name: name, tuile_couleur : couleur, tuile_icon: icon, tuile_chemin: chemin}
//     console.log(data)
//     create_tuile (name,couleur, icon, chemin,img)
//     create_context_tuile(name,couleur,icon,chemin,img)
// }
// document.getElementById('form-tuile').onsubmit = (e) => {
//     e.preventDefault()
//     getFormData(Object.fromEntries(new FormData(e.target).entries()))
// }

function toggleImage() {
    var imageCheck = document.getElementById("tuile_imageCheck");
    var imageField = document.getElementById("tuile_imageField");
    var iconField = document.getElementById("tuile_iconField");
    
    if (imageCheck.checked == true) {
        imageField.style.display = "block";
        imageField.querySelector('input').required = true;
        iconField.style.display = "none";
        iconField.querySelector('input').required = false;
    } else {
        imageField.style.display = "none";
        imageField.querySelector('input').required = false;
        iconField.style.display = "block";
        iconField.querySelector('input').required = true;
    }
}

var create_form_tuile= document.getElementById("form-tuile");
create_form_tuile.addEventListener("submit", function(e) {
    e.preventDefault();
    var nom = document.getElementById("tuile_nom").value || "non défini";
    var couleur = document.getElementById("tuile_couleur").value || "#6c3";
    var imageCheck = document.getElementById("tuile_imageCheck").checked;
    var img = "non";
    var icon = document.getElementById("tuile_icon").value || "help";
    var chemin = document.getElementById("tuile_chemin").value;

    if (imageCheck == true) {
        const image = document.getElementById("tuile_img").files[0];
        const reader = new FileReader()
        reader.onloadend = () => {
            img = reader.result
            create_tuile (nom,couleur,icon, chemin,img)
            create_context_tuile(nom,couleur,icon,chemin,img)
        }
        reader.readAsDataURL(image)
    } else {
        create_tuile (nom,couleur,icon, chemin,img)
        create_context_tuile(nom,couleur,icon,chemin,img)
    }
});
// 
// 
//