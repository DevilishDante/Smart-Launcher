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

function remove(element) {
    alert("Supprimer"+element);
}

function rezise(element) {
    // var div = document.createElement('div');
    // div.innerHTML = document.getElementById('resize').textContent;
    // document.body.appendChild(div);
    alert("test"+element);
}


function monmenu(element) {
    // var name_tuile = data_tuiles.forEach(tuile => create_tuile(tuile.name));
    var x = document.getElementById('ctxmenu1');
    if(x) x.parentNode.removeChild(x);
    var d = document.createElement('div');
    d.setAttribute('class', 'ctxmenu');
    d.setAttribute('id', 'ctxmenu1');
    element.parentNode.appendChild(d);
    d.style.left = xMousePosition + "px";
    d.style.top = yMousePosition + "px";
    d.onmouseover = function(e) { this.style.cursor = 'pointer'; } 
    d.onclick = function(e) { element.parentNode.removeChild(d);  }
    document.body.onclick = function(e) { element.parentNode.removeChild(d);  }

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
    p4.onclick=function() { remove(element) };  
    p4.setAttribute('class', 'ctxline');
    p4.innerHTML = "<span class='material-icons' style='font-size: 12pt;font-weight: bolder;'>delete</span> Suprimer";

    return false;
}

var color_picker = document.getElementById("tuile_couleur");
var color_picker_wrapper = document.getElementById("color-picker-wrapper");
color_picker.onchange = function() {
	color_picker_wrapper.style.backgroundColor = color_picker.value;    
}
color_picker_wrapper.style.backgroundColor = color_picke