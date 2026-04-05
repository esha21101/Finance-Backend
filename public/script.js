const BASE_URL = "https://finance-backend-8y12.onrender.com";

async function loadSummary() {
  const res = await fetch(`${BASE_URL}/dashboard/summary`);
  const data = await res.json();

  document.getElementById("income").innerText = data.totalIncome;
  document.getElementById("expense").innerText = data.totalExpense;
  document.getElementById("balance").innerText = data.netBalance;
}

async function addRecord() {
  const amount = document.getElementById("amount").value;
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;

  await fetch(`${BASE_URL}/records`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "role": "ADMIN"
    },
    body: JSON.stringify({ amount: Number(amount), type, category })
  });

  alert("Record Added!");
  loadSummary();
}

// Load data on page load
loadSummary();