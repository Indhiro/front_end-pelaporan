let header = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <div style="position: fixed; z-index: 100;" class="header">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="header-content">
                        <div class="header-left">
                            <!-- explor -->
                            <div class="brand-logo"><a class="mini-logo" href="index.html"><img
                                        src="images/logoi.png" alt="" width="40"></a></div>
                            <div class="search">
                                <form onsubmit="getLaporan(); return false;">
                                    <span><i class="ri-search-line"></i></span>
                                    <input type="text"placeholder="Search Here" id="inputSearch">
                                </form>
                            </div>
                            <h1 style="position: absolute; margin-top: 50px; left: 50%; margin-left: -50px; width: 100px; height: 100px;
                        font-style: italic; font-family: Monospace; color: gray">Pelaporan</h1>
                        </div>
                        <div class="header-right">
                            <!-- <div class="theme-switch"><i class="ri-sun-line"></i></div> -->
                            <div class="dark-light-toggle theme-switch" onclick="themeToggle()">
                                <span class="dark"><i class="ri-moon-line"></i></span>
                                <span class="light"><i class="ri-sun-line"></i></span>
                            </div>
                            
                            <div class="dropdown" style="margin-right: 20px;">
                              <div class="notify-bell icon-menu">
                                <span><i class="ri-notification-2-line">
                                <div class="notificationNumber" id="notificationNumber" role="status">0</div></i></span>
                              </div>
                                <div class="dropdown-content" id="dropdown-content">
                                    <a href="#">Link 3</a>
                                </div>
                            </div>

                            <div class="dropdown profile_log dropdown" onclick="profileSetting()">
                                <div data-bs-toggle="dropdown" aria-haspopup="true" class="" aria-expanded="false">
                                    <div class="user icon-menu active">
                                        <img id="imageIcon" src="images/avatar/9.jpg" alt="">
                                        <span id="nameUser" style="margin-left: 10px; text-transform:capitalize; margin-right: 2px;"></span>
                                        <span id="roleUser" style="font-size: 11px;"></span>
                                    </div>
                                </div>
                            </div>
                            <a onclick="logoutButton()" style="margin-top: -10px;">
                                <div style="cursor:pointer;">
                                    <i class="bi bi-box-arrow-right h3" ></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = header;
    }
}
  
customElements.define('header-component', Header);