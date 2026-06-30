/* ===========================
   SIDEBAR TOGGLE
=========================== */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

/* ===========================
   LANGUAGE TOGGLE
=========================== */
let currentLang = "en";
function toggleLanguage() {
  if (currentLang === "en") {
    document.querySelector(".hero h1").innerText = "منصة ذكية للفحص وإدارة الجودة";
    document.querySelector(".hero p").innerText = "QUAILO تساعد المصانع والفرق العالمية على إدارة الفحوصات والعيوب والتقارير باستخدام الذكاء الاصطناعي.";
    currentLang = "ar";
  } else {
    document.querySelector(".hero h1").innerText = "Smart Quality Inspection Platform";
    document.querySelector(".hero p").innerText = "QUAILO helps manufacturers and global teams manage inspections, defects, and reports with AI-powered insights.";
    currentLang = "en";
  }
}

/* ===========================
   MEMBERS REGISTRATION
=========================== */
const membersForm = document.querySelector(".members form");
if (membersForm) {
  membersForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = membersForm.querySelector("input[type='text']").value;
    const email = membersForm.querySelector("input[type='email']").value;
    alert(`✅ Member Registered:\nName: ${name}\nEmail: ${email}`);
    membersForm.reset();
  });
}

/* ===========================
   DASHBOARD SIMULATION
=========================== */
function updateDashboard() {
  const inspections = Math.floor(Math.random() * 20000);
  const defects = Math.floor(Math.random() * 300);
  const factories = 580;
  const score = (95 + Math.random() * 5).toFixed(1);

  const cards = document.querySelectorAll(".dashboard .card");
  if (cards.length >= 4) {
    cards[0].innerText = `Total Inspections: ${inspections}`;
    cards[1].innerText = `Open Defects: ${defects}`;
    cards[2].innerText = `Factories: ${factories}`;
    cards[3].innerText = `Quality Score: ${score}%`;
  }
}
setInterval(updateDashboard, 5000);

/* ===========================
   COMMUNITY GAMIFICATION
=========================== */
let points = 0;
function earnPoints(amount) {
  points += amount;
  alert(`🎮 You earned ${amount} points! Total: ${points}`);
}
