document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    const expenseList = document.getElementById('expense-list');
    const newRow = expenseList.insertRow();
    newRow.innerHTML = `<td>${date}</td><td>${category}</td><td>${amount}</td>`;
    
    updateTotalExpenses();
    this.reset();
});

function updateTotalExpenses() {
    const expenseList = document.getElementById('expense-list');
    let total = 0;
    for (let i = 0; i < expenseList.rows.length; i++) {
        total += parseFloat(expenseList.rows[i].cells[2].innerText);
    }
    document.getElementById('total-expenses').innerText = total;
}
