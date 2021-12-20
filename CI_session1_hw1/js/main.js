function createTable () {
    let row = document.getElementById("row");
    let column = document.getElementById("column");

    if (row.value =='' || column.value == '') {
        alert("Xin nhập giá trị");
        return false;
    } else if (isString(row.value) || isString(column.value)) {
        alert("Xin nhập số nguyên dương");
        return false;
    } else {
        let container = document.getElementById('Container');
        let countRow = parseInt(row.value);
        let countColumn = parseInt(column.value);
        let addTable = document.createElement("table");
        addTable.border = '1';

        for (i = 0; i < countRow; i++) {
            let addRow = document.createElement("tr");
            addTable.appendChild(addRow);

            for (j = 0; j < countColumn; j++) {
                let addColumn = document.createElement("td");
                let textNode = document.createTextNode(text);
                addColumn.appendChild(textNode);
                addRow.appendChild(addColumn);
            }
        }
        container.appendChild(addTable);
        return true;
    }
}