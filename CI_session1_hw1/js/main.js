function createTable () {
    let row = document.getElementById("row");
    let column = document.getElementById("column");
    let container = document.getElementById("Container");

    if (row.value == '' || column.value == '') {
        alert("Xin nhập vào giá trị");
        return false;
    } else if (isNaN(row.value) || isNaN(column.value)) {
        alert("Xin nhập vào số nguyên dương");
        return false;
    } else {
        let countRow = parseInt(row.value);
        let countColumn = parseInt(column.value);
        let addTable = document.createElement("table");
        addTable.border = 1;

        for (let i = 0; i < countRow; i++) {
            let addRow = document.createElement("tr");
            addTable.appendChild(addRow);

            for (let j = 0; j < countColumn; j++) {
                let addColumn = document.createElement("td");
                let textNode = document.createTextNode(i + j);
                addColumn.appendChild(textNode);
                addRow.appendChild(addColumn);
            }
        }
        container.appendChild(addTable);
        return true;
    }
}