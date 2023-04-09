function initLogin(){
    var login_form = document.createElement('div')
    var body_window = document.getElementById('tuiles')
    
    login_form.setAttribute('class','login-form')
    login_form.appendChild(body_window)
    
    
    
    var login_content = document.createElement('div')
    login_content.appendChild(login_form)
    login_content.innerHTML = "terer"
}    

// tableau d'utilisateurs enregistrés (à remplacer par une requête à votre backend)
const users = [
    { email: "utilisateur1@example.com", password: "abc123" },
    { email: "utilisateur2@example.com", password: "pass456" }
  ];

function checkLogin (email,password){
    var check = users.find(u => u.email == email && u.password == password);
    if (check) {
        return true
    } else {
        return false
    }
}
  // récupération des données du formulaire
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // vérification des informations de connexion
  var user = users.find(u => u.email == email && u.password == password);
  
  if (user) {
    // création d'une session utilisateur et stockage dans le local storage
    localStorage.setItem("currentUser", JSON.stringify(user));
    
    // redirection de l'utilisateur vers la page principale
    window.location.href = "index.html";
  } else {
    alert("Mauvais identifiants");
  }
  