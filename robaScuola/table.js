function createTable(row, col) {
    let table = document.createElement("table");
    for (let i = 0; i < row; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < col; j++) {
            if (i === 0) {
                let th = document.createElement("th");
                th.innerText = "" + ((j + 1) * (i + 1));
                tr.appendChild(th);
            } else {
                let td = document.createElement("td");
                td.innerText = "" + ((j + 1) * (i + 1));
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
    return table
}
