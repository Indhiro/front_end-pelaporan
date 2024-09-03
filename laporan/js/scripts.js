jQuery(window).on("load", function () {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');
});

jQuery(document).ready(function () {
    $(function () {
        for (var nk = window.location,
            o = $(".menu a, .settings-menu a").filter(function () {
                return this.href == nk;
            }).addClass("active").parent().addClass("active"); ;) {
            // console.log(o)
            if (!o.is("li")) break;
            o = o.parent().addClass("show").parent().addClass("active");
        }
    });
});

(function () {
    let onpageLoad = localStorage.getItem("theme") || "";
    // let element = document.body;
    // element.classList.add(onpageLoad);
    if (document.getElementById("theme")) document.getElementById("theme").textContent = localStorage.getItem("theme") || "light";
})();

function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark-theme");

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-theme") {
        localStorage.setItem("theme", "");
    } else {
        localStorage.setItem("theme", "dark-theme");
    }
}

let defaultPage = 1; // pagination
let totalLaporan = 0; // pagination
let pageSize = 10; // pagination

function statusColor(status, nama_petugas) {
    let submitted = 'Submitted'
    let approve_pengawas_rename = 'Approve Pengawas'
    let approve_kepala_prodi_rename = 'Approve Kepala Prodi'
    let approve_wakil_dekan_2_rename = 'Approve Wakil Dekan 2'
    let final_approve_rename = 'Approve Wakil Rektor 2'
    let progress = 'Progress'
    let check = 'Check'
    let done = 'Done'
    let rejected = 'Rejected'
    if (status == 'submitted') return `<span class="badge bg-secondary">${submitted}</span>`;
    if (status == 'approve_pengawas') return `<span style="background: #2E86C1" class="badge">${approve_pengawas_rename}</span>`;
    if (status == 'approve_kepala_prodi') return `<span style="background: #17A589" class="badge">${approve_kepala_prodi_rename}</span>`;
    if (status == 'approve_wakil_dekan_2') return `<span style="background: #F39C12" class="badge">${approve_wakil_dekan_2_rename}</span>`;
    if (status == 'final_approve') return `<span style="background: #884EA0" class="badge">${final_approve_rename}</span>`;
    if (status == 'progress') return `<span style="background: #F1C40F" class="badge">${progress}</span>`;
    if (status == 'check') return `<span style="background: #A6ACAF" class="badge">${check}</span>`;
    if (status == 'done') return `<span class="badge bg-primary">${done} by ${nama_petugas}</span>` 
    if (status == 'rejected') return `<span style="background: #CB4335" class="badge">${rejected}</span>`;
}

// PAGINATION --
function paginationGenerator() {
    let navPagination = document.getElementById('navPagination');
    let totalPage = Math.ceil((totalLaporan / pageSize));
    let pageTag = `<ul class="pagination">
        <li class="page-item"><a class="page-link" href="#" onclick="paginationPrevious(event)">Previous</a></li>`
        if (totalPage > 0) {
            for (let index = 0; index < totalPage; index++) {
                pageTag += `<li class="page-item"><a class="page-link" href="#" onclick="paginationPage(event, ${index + 1})">${index + 1}</a></li>`
            }
        } else {
            pageTag += `<li class="page-item"><a class="page-link" href="#" onclick="paginationPage(event, 1)">1</a></li>`
        }
    pageTag += `
        <li class="page-item"><a class="page-link" href="#" onclick="paginationNext(event)">Next</a></li>
    </ul>`
    navPagination.innerHTML = pageTag
}
function paginationPage(e, val) {
    e.preventDefault()
    defaultPage = val;
    getLaporan(null, null, null, null, null, val)
}
function paginationPrevious(e) {
    e.preventDefault();
    if (defaultPage > 1) {
        defaultPage = defaultPage - 1;
        getLaporan(null, null, null, null, null, defaultPage - 1);
    }
}
function paginationNext(e) {
    e.preventDefault();
    defaultPage = defaultPage + 1;
    getLaporan(null, null, null, null, null, defaultPage);
}
// PAGINATION --

function logoutButton() {
    localStorage.removeItem("id_user")
    localStorage.removeItem("role")
    localStorage.removeItem("nameUser")
    window.location.replace("signin.html")
}

function showDialogComment(id) {
    document.getElementById(`card${id}`).scrollIntoView({behavior: "instant", block: "start", inline: "nearest"})
}

// function showPosition(position) {
//     currentLocation = {
//         latitude : position.coords.latitude,
//         longitude : position.coords.longitude
//     }
//     return true
// }
