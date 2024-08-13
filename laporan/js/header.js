let userLogin = localStorage.getItem("id_user");
let nameUserLogin = localStorage.getItem("nameUser");
let imageUser = localStorage.getItem("imageUser");
let roleUserLogin = localStorage.getItem("role");
validationLogin()

function validationLogin() {
    document.getElementById('imageIcon').src = imageUser ? `data:image/png;base64,${imageUser}` : 'images/avatar/9.jpg';
    document.getElementById('nameUser').innerHTML = nameUserLogin ? nameUserLogin : 'not login yet'
    document.getElementById('roleUser').innerHTML = roleUserLogin ? `(${roleUserLogin})` : ''
    if (!userLogin) return window.location.replace('signIn.html')
}

function logoutButton() {
    localStorage.removeItem("id_user")
    localStorage.removeItem("role")
    localStorage.removeItem("nameUser")
    localStorage.removeItem("imageUser")
    window.location.replace("signin.html")
}

function profileSetting() {
    window.location.replace("settings-profile.html")
}