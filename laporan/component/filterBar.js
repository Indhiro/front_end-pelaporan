let filterbar = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filter</title>
</head>
<body>
    <div style="float: right;">
        <select class="form-select" aria-label="Default select example" style="width: 300px;" id="selectedStatus" onchange="buttonSort('status')">
            <option value="null" selected>Sort By Status</option>
            <option value="submitted">Submitted</option>
            <option value="approve_pengawas">Approve Pengawas</option>
            <option value="approve_kepala_prodi">Approve Kepala Prodi</option>
            <option value="approve_wakil_dekan_2">Approve Wakil Dekan 2</option>
            <option value="approve_wakil_rektor_2">Approve Wakil Rektor 2</option>
            <option value="rejected">Rejected</option>
            <option value="check">Check</option>
            <option value="done">Done</option>
            <option value="deleted">Deleted</option>
        </select>
    </div>
    <button style="margin-left:21px" class="btn btn-outline-dark btn-sm" onclick="buttonSort('date')">Sort By Date</button>
    <button class="btn btn-outline-dark btn-sm" onclick="buttonSort('point')">Sort By Point</button>
    <span id="sortLabel"></span>
</body>
</html>
`

class FilterBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = filterbar;
    }
}
  
customElements.define('filterbar-component', FilterBar);