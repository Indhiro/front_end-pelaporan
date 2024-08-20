let userLogin = localStorage.getItem("id_user");
let nameUserLogin = localStorage.getItem("nameUser");
let imageUser = localStorage.getItem("imageUser");
let roleUserLogin = localStorage.getItem("role");
validationLogin()
getNotification(userLogin);

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

function getNotification(userLogin) {
    let redDot = `<i class="bi bi-dot" style="font-size: 30px; color: red"></i>`
    var apiUrl = `http://localhost:3000/notification/get?userId=${userLogin}`;
    var notifDiv = document.getElementById("dropdown-content");
    var notifNumb = document.getElementById("notificationNumber");
    notifDiv.innerHTML = ''
    fetch(apiUrl)
        .then(async (response) => {
            let data = await response.json();
            notifNumb.innerHTML = data.resCount[0].count
            for (let index = 0; index < data.result.length; index++) {
                const element = data.result[index];
                let newNotif = ''
                if (element.seen == null) newNotif = redDot
                notifDiv.innerHTML +=   `
                <a class="" href="#" onclick="updateSeen(${element.id},${element.id_user},${element.seen})">
                    <div class="d-flex">
                        <span class="me-3 icon success">${newNotif}</span>
                        <div>
                            <p style="font-size: 13px;">${element.notes}</p>
                            <span style="font-size: 12px; color: grey">${element.dateformated}</span>
                        </div>
                    </div>
                </a>`
                
            }
        }).catch(err => {
            console.log("getnotif", err.message);
        });
}

function updateSeen(id,userId,seen) {
    if (seen == null) {
        var apiUrl = `http://localhost:3000/notification/seen?userId=${userId}&id=${id}`;
        fetch(apiUrl)
            .then(async (response) => {
                return getNotification(userLogin); // RELOAD
            }).catch(err => {
                console.log("updateSeen", err.message);
            });
    }
}