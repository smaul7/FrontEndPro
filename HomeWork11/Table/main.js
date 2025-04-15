const tableWrapper = document.getElementById('table-wrapper');
const table = document.createElement('table');

for (let i = 0; i <= 10; i++) {
  const row = document.createElement('tr');

  for (let j = 0; j <= 10; j++) {
    const cell = i === 0 || j === 0
      ? document.createElement('th')
      : document.createElement('td');

    if (i === 0 && j === 0) {
      cell.textContent = '×';
    } else if (i === 0) {
      cell.textContent = j;
    } else if (j === 0) {
      cell.textContent = i;
    } else {
      cell.textContent = i * j;
    }

    row.appendChild(cell);
  }

  table.appendChild(row);
}

tableWrapper.appendChild(table);