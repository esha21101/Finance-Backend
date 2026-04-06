const BASE_URL = "https://finance-backend-8y12.onrender.com";

async function loadData() {
  const res = await fetch(`${BASE_URL}/dashboard/summary`);
  const data = await res.json();

  // Summary
  document.getElementById("income").innerText = data.totalIncome;
  document.getElementById("expense").innerText = data.totalExpense;
  document.getElementById("balance").innerText = data.netBalance;

  // Category totals
  const catList = document.getElementById("categories");
  catList.innerHTML = "";

  for (let key in data.categoryTotals) {
    const li = document.createElement("li");
    li.innerText = `${key}: ₹${data.categoryTotals[key]}`;
    catList.appendChild(li);
  }

  // Recent activity
  const list = document.getElementById("recent");
  list.innerHTML = "";

  data.recentActivity.forEach(r => {
    const li = document.createElement("li");
    li.innerText = `${r.category} - ₹${r.amount}`;
    list.appendChild(li);
  });
}

async function addRecord() {
  const amount = document.getElementById("amount").value;
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;
  const note = document.getElementById("note").value;

  await fetch(`${BASE_URL}/records`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      role: "ADMIN"
    },
    body: JSON.stringify({
      amount: Number(amount),
      type,
      category,
      note
    })
  });

  loadData();
}

loadData();