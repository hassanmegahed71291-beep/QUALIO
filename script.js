// =========================
// QAI Platform V3
// Hassan Megahed
// =========================

// Elements

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const langBtn = document.getElementById("langBtn");

const pages = document.querySelectorAll(".page");
const menuItems = document.querySelectorAll(".menu li");

// =========================
// Login
// =========================

const loginBtn = document.getElementById("loginBtn");
const loginScreen = document.getElementById("loginScreen");
const platform = document.getElementById("platform");

loginBtn?.addEventListener("click", () => {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();

    if (!email || !password) {

        alert("Please enter Email & Password");
        return;

    }

    loginScreen.style.display = "none";
    platform.style.display = "block";

});

// =========================
// Sidebar
// =========================

menuBtn?.addEventListener("click", () => {

    sidebar.classList.toggle("active");

});

// =========================
// Navigation
// =========================

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        const pageId = item.dataset.page;

        pages.forEach(page => {

            page.classList.remove("active-page");

        });

        document
            .getElementById(pageId)
            .classList.add("active-page");

        if (window.innerWidth < 900) {

            sidebar.classList.remove("active");

        }

    });

});

// =========================
// Motivation
// =========================

const motivationText =
    document.getElementById("motivationText");

const motivationMessages = [

    "Quality starts with attention to detail.",
    "A clean workplace prevents defects.",
    "Every defect is an opportunity to improve.",
    "Teamwork creates excellence.",
    "Organization reduces mistakes.",
    "Inspection today prevents complaints tomorrow.",
    "Clean tables create better quality.",
    "Continuous improvement creates world-class results."

];

function updateMotivation() {

    if (!motivationText) return;

    const random =
        Math.floor(
            Math.random() *
            motivationMessages.length
        );

    motivationText.innerText =
        motivationMessages[random];

}

updateMotivation();

setInterval(updateMotivation, 10000);

// =========================
// Translation
// =========================

const translations = {

    ar: {

        dashboard: "🏠 الرئيسية",
        members: "👥 الأعضاء",
        ai: "🤖 خبير الجودة",
        defects: "📸 مكتبة العيوب",
        measurements: "📏 القياسات",
        quality: "✅ ثقافة الجودة",
        cleanliness: "🧹 النظافة",
        suggestions: "💡 الاقتراحات",
        profile: "👤 الملف الشخصي",
        admin: "👨‍💼 لوحة الإدارة",

        memberCreated:
            "✅ تم إنشاء العضو بنجاح",

        aiReply:
            "خبير QAI جاهز للمساعدة."

    },

    en: {

        dashboard: "🏠 Dashboard",
        members: "👥 Members",
        ai: "🤖 QAI Expert AI",
        defects: "📸 Defect Library",
        measurements: "📏 Measurements",
        quality: "✅ Quality Culture",
        cleanliness: "🧹 Cleanliness",
        suggestions: "💡 Suggestions",
        profile: "👤 Profile",
        admin: "👨‍💼 Admin Panel",

        memberCreated:
            "✅ Member Created Successfully",

        aiReply:
            "QAI Expert AI is ready to help."

    }

};

let currentLanguage = "ar";

langBtn?.addEventListener("click", () => {

    if (currentLanguage === "ar") {

        currentLanguage = "en";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        langBtn.innerHTML = "AR";

        document.querySelector('[data-page="dashboard"]').innerHTML = translations.en.dashboard;
        document.querySelector('[data-page="members"]').innerHTML = translations.en.members;
        document.querySelector('[data-page="ai"]').innerHTML = translations.en.ai;
        document.querySelector('[data-page="defects"]').innerHTML = translations.en.defects;
        document.querySelector('[data-page="measurements"]').innerHTML = translations.en.measurements;
        document.querySelector('[data-page="quality"]').innerHTML = translations.en.quality;
        document.querySelector('[data-page="cleanliness"]').innerHTML = translations.en.cleanliness;
        document.querySelector('[data-page="suggestions"]').innerHTML = translations.en.suggestions;
        document.querySelector('[data-page="profile"]').innerHTML = translations.en.profile;
        document.querySelector('[data-page="admin"]').innerHTML = translations.en.admin;

    } else {

        currentLanguage = "ar";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        langBtn.innerHTML = "EN";

        document.querySelector('[data-page="dashboard"]').innerHTML = translations.ar.dashboard;
        document.querySelector('[data-page="members"]').innerHTML = translations.ar.members;
        document.querySelector('[data-page="ai"]').innerHTML = translations.ar.ai;
        document.querySelector('[data-page="defects"]').innerHTML = translations.ar.defects;
        document.querySelector('[data-page="measurements"]').innerHTML = translations.ar.measurements;
        document.querySelector('[data-page="quality"]').innerHTML = translations.ar.quality;
        document.querySelector('[data-page="cleanliness"]').innerHTML = translations.ar.cleanliness;
        document.querySelector('[data-page="suggestions"]').innerHTML = translations.ar.suggestions;
        document.querySelector('[data-page="profile"]').innerHTML = translations.ar.profile;
        document.querySelector('[data-page="admin"]').innerHTML = translations.ar.admin;

    }

});

// =========================
// AI Chat
// =========================

const sendBtn =
    document.getElementById("sendBtn");

const userInput =
    document.getElementById("userInput");

const chatMessages =
    document.getElementById("chatMessages");

sendBtn?.addEventListener(
    "click",
    sendMessage
);

userInput?.addEventListener(
    "keypress",
    (e) => {

        if (e.key === "Enter") {

            sendMessage();

        }

    }
);

async function sendMessage() {

    const text =
        userInput.value.trim();

    if (!text) return;

    addMessage(text, "user");

    userInput.value = "";

    try {

        const response = await fetch(

            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,

            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    contents: [
                        {
                            parts: [
                                {
                                    text: text
                                }
                            ]
                        }
                    ]

                })

            }

        );

       const data =
await response.json();

console.log(data);

        const reply =
            data.candidates?.[0]?.content?.parts?.[0]?.text
            || "No response";

        addMessage(reply, "bot");

    }
    catch (error) {

        console.error(error);

        addMessage(
            "Gemini Connection Error",
            "bot"
        );

    }

}

function addMessage(message, type) {

    const div =
        document.createElement("div");

    div.style.padding = "12px";
    div.style.marginBottom = "10px";
    div.style.borderRadius = "10px";

    if (type === "user") {

        div.style.background =
            "#06B6D4";

    } else {

        div.style.background =
            "#1E293B";

    }

    div.innerText = message;

    chatMessages.appendChild(div);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}

// =========================
// Members
// =========================

const createMemberBtn =
    document.getElementById(
        "createMemberBtn"
    );

createMemberBtn?.addEventListener(
    "click",
    () => {

        const result =
            document.getElementById(
                "memberResult"
            );

        result.innerHTML =
            currentLanguage === "ar"
                ? translations.ar.memberCreated
                : translations.en.memberCreated;

        const count =
            document.getElementById(
                "membersCount"
            );

        if (count) {

            count.innerText =
                Number(count.innerText) + 1;

        }

    }
);

// =========================
// Startup
// =========================

console.log(
    "QAI Platform V3 Loaded"
);
