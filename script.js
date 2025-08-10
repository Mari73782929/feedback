let feedbackData = JSON.parse(localStorage.getItem("feedbacks") || "[]");

function showSection(id) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function saveFeedback(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    feedbackData.push(data);
    localStorage.setItem("feedbacks", JSON.stringify(feedbackData));
    alert("✅ Feedback submitted successfully!");
    e.target.reset();
}

function loginAdmin(e) {
    e.preventDefault();
    let email = document.getElementById("adminEmail").value;
    let pass = document.getElementById("adminPass").value;
    if (email === "admin@example.com" && pass === "1234") {
        loadFeedbacks();
        showSection("adminPage");
    } else {
        alert("❌ Invalid login");
    }
}

function loadFeedbacks() {
    const tbody = document.querySelector("#students-table tbody");
    tbody.innerHTML = "";
    feedbackData.forEach(f => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${f.year}</td><td>${f.sem}</td><td>${f.date}</td>
        <td>${f.branch}</td><td>${f.section}</td><td>${f.subject}</td>
        <td>${f.ques1}</td><td>${f.remarks}</td>`;
        tbody.appendChild(tr);
    });
}

function logoutAdmin() {
    showSection("feedbackForm");
}
const menuToggle = document.getElementById('menuToggle');
const sidebarMenu = document.getElementById('sidebarMenu');
const menuClose = document.getElementById('menuClose');
const overlay = document.getElementById('overlay');
const body = document.body;

function openMenu() {
  sidebarMenu.classList.add('active');
  overlay.classList.add('active');
  menuToggle.classList.add('active');
  body.classList.add('sidebar-open');
}

function closeMenu() {
  sidebarMenu.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.classList.remove('active');
  body.classList.remove('sidebar-open');
}

menuToggle.addEventListener('click', () => {
  if (sidebarMenu.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Optional: close menu when clicking a nav button (good UX)
sidebarMenu.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', closeMenu);
});
