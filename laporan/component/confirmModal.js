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
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Warning</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p id="confirmModalNotes"></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="sureDelete()">Sure</button>
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