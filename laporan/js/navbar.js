let validationFilter = document.getElementById('validationFilterId')

if (validationFilter) {
    validationFilter.innerHTML = ''
    if (localStorage.getItem("role") == 'mahasiswa' || localStorage.getItem("role") == 'dosen') {
        validationFilter.innerHTML = ''
    } else {
        validationFilter.innerHTML += `
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
            <a href="report.html">
                <span><i style="font-size: 30px;" class="bi bi-flag"></i></span>
                <span class="nav-text">Report</span></a>
        </li>`
    }
}