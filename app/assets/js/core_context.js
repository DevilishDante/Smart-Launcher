var xMousePosition = 0;
var yMousePosition = 0;

document.oncontextmenu = function() {return false;}

onmousemove = function(e){
    xMousePosition = e.clientX;
    yMousePosition = e.clientY;   
}

function rename(element) {
    alert("Renommer"+element);
}

function edit(element) {
    alert("Editer"+element);
}
async function remove(id) {
    const indexASupprimer = data_tuiles.findIndex(data_tuiles => data_tuiles.id === id);
    if (indexASupprimer !== -1) {data_tuiles.splice(indexASupprimer, 1)}
    await window.tuile_handler.save(data_tuiles)
    const parent = document.getElementById("tuiles")
    while (parent.firstChild) parent.removeChild(parent.firstChild)
    data_tuiles.forEach(tuile => create_tuile(tuile.name, tuile.couleur, tuile.icon, tuile.chemin, tuile.img, tuile.id))
    if (!data_tuiles.length) {
        NoTuileAdd()
    }
}
function rezise(element) {
    // var div = document.createElement('div');
    // div.innerHTML = document.getElementById('resize').textContent;
    // document.body.appendChild(div);
    var d = document.createElement('div');
    d.setAttribute('class', 'ctxmenu');
    d.setAttribute('class', 'modal-header');
    d.setAttribute('id', 'ctxmenu1');
    d.innerHTML =
    '<div class="modal-c-custom modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog modal-sm">'+
            '<div class="modal-content box-b-alt">'+
                '<div class="modal-header"><span class="material-icons">bookmark_add</span> Ajouter une tuile</div>'+
                '<div class="modal-body">'+
                    '<form id="form-tuile" class="row">'+
                        '<div class="col-md-12">'+
                            '<input class="center" type="text" id="tuile_nom" name="tuile_nom" placeholder="Nom de la tuile" required>'+
                        '</div>'+
                        '<div class="row col-md-12 center">'+
                            '<p class="center">'+
                                '<input class="center" type="color" id="tuile_couleur" name="tuile_couleur" value="#6c3" required>'+
                                '<label class="center" for="tuile_couleur"><span class="material-icons">format_color_fill</span></label>'+
                            '</p>'+
                            '<p class="center">'+
                                '<input type="checkbox" id="tuile_imageCheck" name="tuile_imageCheck" onclick="toggleImage()">'+
                                '<label style="margin-bottom:-5px" for="tuile_imageCheck">'+
                                    '<span class="material-icons">image</span>'+
                                    '<span class="ui"></span>'+
                                '</label>'+
                            '</p>'+
                        '</div>'+
                        '<div class="col-md-12" id="tuile_imageField" style="display:none">'+
                            '<label class="center" for="tuile_img"><a class="btn-nav-b btn-text btn-box center"><span class="material-icons">upload</span>Choisir une image...</a></label>'+
                            '<input class="center" type="file" id="tuile_img" name="tuile_img" accept="image/png, image/jpg, image/webp">'+
                        '</div>'+
                        '<div class="col-md-12" id="tuile_iconField" style="padding-bottom:14px">'+
                            '<input class="center" type="text" id="tuile_icon" name="tuile_icon" placeholder="Nom de l\icone" required>'+
                        '</div>'+
                        '<div class="col-md-12" id="tuile_cheminField">'+
                            '<input class="center" type="text" id="tuile_chemin" name="tuile_chemin" placeholder="Chemin de la tuile" required>'+
                        '</div>'+
                        '<br>'+
                        '<br>'+
                        '<br>'+
                        '<button class="btn-nav-b btn-text btn-box center" type="submit">Créer cette tuile !</button>'+
                    '</form>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'
    document.body.appendChild(d);
    // alert("test "+element);
}
function monmenu(element,id) {
    // var name_tuile = data_tuiles.forEach(tuile => create_tuile(tuile.name));
    var x = document.getElementById('ctxmenu1');
    if(x) x.parentNode.removeChild(x);
    var d = document.createElement('div');
    d.setAttribute('class', 'ctxmenu');
    d.setAttribute('id', 'ctxmenu1');
    element.appendChild(d);
    d.style.left = xMousePosition + "px";
    d.style.top = yMousePosition + "px";
    d.onmouseover = function(e) { this.style.cursor = 'pointer';} 
    d.onclick = function(e) { element.removeChild(d);  }
    document.body.onclick = function(e) {element.remove(e)}

    var p = document.createElement('p');
    d.appendChild(p);
    p.onclick=function() { rename(element) };
    p.setAttribute('class', 'ctxline');
    p.innerHTML = "<span class='material-icons' style='font-size: 12pt;font-weight: bolder;'>format_underlined</span> Renommer";

    var p2 = document.createElement('p');
    d.appendChild(p2);
    p2.onclick=function() { edit(element) };  
    p2.setAttribute('class', 'ctxline');
    p2.innerHTML = "<span class='material-icons' style='font-size: 12pt;font-weight: bolder;'>edit</span> Editer"; 

    var p3 = document.createElement('p');
    d.appendChild(p3);
    p3.onclick=function() { rezise(element) };  
    p3.setAttribute('class', 'ctxline');
    p3.innerHTML = "<span class='material-icons' style='font-size: 12pt;font-weight: bolder;'>aspect_ratio</span> Changer taille"; 

    var p4 = document.createElement('p');
    d.appendChild(p4);
    p4.onclick=function() { remove(id) };  
    p4.setAttribute('class', 'ctxline');
    p4.innerHTML = "<span class='material-icons' style='font-size: 12pt;font-weight: bolder;'>delete</span> Suprimer";

    return false;
}