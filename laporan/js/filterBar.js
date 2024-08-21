let sortType = 'desc';
let sortLabel = document.getElementById('sortLabel');
let filterTemp = 'point';
sortLabel.innerHTML = `Sort By : ${filterTemp},${sortType}`

function buttonSort(type) {
    let statusValue = document.getElementById('selectedStatus').value;
    let sortLabel = document.getElementById('sortLabel');
    if (type != 'status') {
        if (sortType == 'asc') {
            sortType = 'desc'
        } else if (sortType == 'desc') {
            sortType = 'asc'
        } else {
            sortType = 'asc'
        }
        filterTemp = type
    }
    if (type == 'status') {
        sortLabel.innerHTML = `Sort By : ${filterTemp},${sortType} ; ${type}`
    } else {
        sortLabel.innerHTML = `Sort By : ${type},${sortType}`
    }
    return getLaporan(null, `${type},${sortType}`, type, statusValue)
}