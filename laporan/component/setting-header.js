let setHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filter</title>
</head>
<body>
    <ul class="settings-menu">
        <li><a href="settings-profile.html">Profile</a></li>
        <li class=""><a href="settings-application.html">Security</a></li>
        <!--     <li class=""><a href="settings-security.html">Application</a></li>
        <li class=""><a href="settings-activity.html">Activity</a></li>
        <li class=""><a href="settings-payment-method.html">Payment Method</a></li> -->
        <li class=""><a href="settings-api.html">User Management</a></li>
    </ul>
</body>
</html>
`

class SettingHeader extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = setHeader;
    }
}
  
customElements.define('setheader-component', SettingHeader);