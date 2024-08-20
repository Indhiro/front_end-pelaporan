let sortType = '';
let sortLabel = document.getElementById('sortLabel');
sortLabel.innerHTML = `Sort By : ${sortType}`

function buttonSort(type) {
    let statusValue = document.getElementById('selectedStatus').value;
    let sortLabel = document.getElementById('sortLabel');
    if (sortType == 'asc') {
        sortType = 'desc'
    } else if (sortType == 'desc') {
        sortType = 'asc'
    } else {
        sortType = 'asc'
    }
    if (type == 'status') sortLabel.innerHTML += `; ${type}`
    else sortLabel.innerHTML = `Sort By : ${type},${sortType}`
    return getLaporan(null, `${type},${sortType}`, type, statusValue)
}