let confirmModal = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirm Modal</title>
</head>
<body>
   <div id="confirmModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content" style="margin-top: 100px">
            <div class="modal-header">
                <h5 class="modal-title">Warning</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="revertUpdate()"></button>
            </div>
            <div class="modal-body">
                <p id="confirmModalNotes"></p>
            </div>
            <div class="container" id="resetPasswordField"></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="revertUpdate()">No</button>
                <button style="background-color: #008CBA;" type="button" class="btn" data-bs-dismiss="modal" onclick="sureUpdate()">Sure</button>
            </div>
            </div>
        </div>
    </div>
</body>
</html>
`

class ConfirmModal extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = confirmModal;
    }
}
  
customElements.define('confirm-component', ConfirmModal);