let navbar = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./router.js"></script>
</head>
<body>
    <div class="sidebar">
        <div class="menu">
            <ul>
                <li style="margin-top: -20px;">
                    <a href="index.html">
                        <span><i style="font-size: 30px;" class="ri-layout-grid-fill"></i></span>
                        <span class="nav-text">Dashboard</span>
                    </a>
                </li>
                <li style="margin-top: -5px;">
                    <a href="validation.html">
                        <span><i style="font-size: 30px;" class="bi bi-check2-square"></i></span>
                        <span class="nav-text">Validation</span></a>
                </li>
                <li style="margin-top: -10px;">
                    <a href="rejected.html">
                        <span><i style="font-size: 30px;" class="bi bi-file-earmark-excel"></i></span>
                        <span class="nav-text">Rejected</span></a>
                </li>
                <li style="margin-top: -10px;">
                    <a href="history.html">
                        <span><i style="font-size: 30px;" class="bi bi-clock-history"></i></span>
                        <span class="nav-text">History</span></a>
                </li>
                <li style="margin-top: 0px;">
                    <a href="settings-profile.html">
                        <span><i style="font-size: 30px;" class="ri-settings-3-line"></i></span>
                        <span class="nav-text">Settings</span></a>
                </li>
                <li class="logout" style="margin-top: -20px;">
                    <a onclick="logoutButton()" href="signin.html">
                        <span><i style="font-size: 30px;" class="ri-logout-circle-line"></i></span>
                        <span class="nav-text">Signout</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>
`

class Navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = navbar;
    }
}
  
customElements.define('navbar-component', Navbar);