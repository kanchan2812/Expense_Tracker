// Initialize expenses array by loading from local storage
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Function to add an expense
function addExpense() {
    // Get the value entered in the "expenseAmount" input field
    const expenseAmount = document.getElementById("expenseAmount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;

    if (expenseAmount && description && category) {
        const expense = {
            amount: parseFloat(expenseAmount),
            description: description,
            category: category,
            editHistory: [],
        };

        expenses.push(expense);

        // Clear input fields
        document.getElementById("expenseAmount").value = "";
        document.getElementById("description").value = "";
        document.getElementById("category").value = "";

        // Save expenses to local storage
        localStorage.setItem("expenses", JSON.stringify(expenses));

        displayExpenses();
    }
}

// Function to display expenses
function displayExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";

    expenses.forEach((expense, index) => {
        const line = document.createElement("div");
        line.classList.add("expense-line");

        line.innerHTML = `
            <p>Expense Amount: $${expense.amount}</p>
            <p>Description: ${expense.description}</p>
            <p>Category: ${expense.category}</p>
            <button onclick="editExpense(${index})">Edit Expenses</button>
            <button onclick="deleteExpense(${index})">Delete Expenses</button>
        `;

        expenseList.appendChild(line);
    });
}

// Function to edit an expense
function editExpense(index) {
    const newAmount = prompt("Enter new expense amount:");
    const newDescription = prompt("Enter new description:");
    const newCategory = prompt("Enter new category:");

    if (newAmount !== null && newDescription !== null && newCategory !== null) {
        const expense = expenses[index];
        const oldAmount = expense.amount;
        const oldDescription = expense.description;
        const oldCategory = expense.category;

        expense.amount = parseFloat(newAmount);
        expense.description = newDescription;
        expense.category = newCategory;

        expense.editHistory.push(`
            Edited:
            Amount from $${oldAmount} to $${newAmount},
            Description from "${oldDescription}" to "${newDescription}",
            Category from "${oldCategory}" to "${newCategory}"
        `);

        // Save updated expenses to local storage
        localStorage.setItem("expenses", JSON.stringify(expenses));

        displayExpenses();
    }
}

// Function to delete an expense
function deleteExpense(index) {
    const confirmDelete = confirm("Are you sure you want to delete this expense?");
    if (confirmDelete) {
        expenses.splice(index, 1);
        localStorage.setItem("expenses", JSON.stringify(expenses));
        displayExpenses();
    }
}

// Initial display
displayExpenses();
