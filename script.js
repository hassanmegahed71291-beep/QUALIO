// =========================
// QAI Platform V1
// Hassan Megahed
// =========================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const langBtn = document.getElementById("langBtn");

const pages = document.querySelectorAll(".page");
const menuItems = document.querySelectorAll(".menu li");

// Sidebar

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("active");

});

// Navigation

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        const pageId = item.dataset.page;

        pages.forEach(page => {

            page.classList.remove("active-page");

        });

        document
            .getElementById(pageId)
            .classList.add("active-page");

        if(window.innerWidth < 900){

            sidebar.classList.remove("active");

        }

    });

});

// Motivation

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

function updateMotivation(){

    const random =
    Math.floor(
        Math.random() *
        motivationMessages.length
    );

    motivationText.innerText =
    motivationMessages[random];

}

updateMotivation();

setInterval(updateMotivation,10000);

// Language

let currentLanguage = "ar";

langBtn.addEventListener("click",()=>{

    if(currentLanguage === "ar"){

        currentLanguage = "en";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        langBtn.innerHTML = "AR";

    }

    else{

        currentLanguage = "ar";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        langBtn.innerHTML = "EN";

    }

});

// Chat Demo

const sendBtn =
document.getElementById("sendBtn");

const userInput =
document.getElementById("userInput");

const chatMessages =
document.getElementById("chatMessages");

sendBtn.addEventListener("click",sendMessage);

userInput.addEventListener("keypress",(e)=>{

    if(e.key === "Enter"){

        sendMessage();

    }

});

function sendMessage(){

    const text =
    userInput.value.trim();

    if(!text) return;

    addMessage(text,"user");

    userInput.value = "";

    setTimeout(()=>{

        addMessage(
        "QAI Expert AI جاهز. سيتم ربط Gemini في المرحلة القادمة.",
        "bot"
        );

    },800);

}

function addMessage(message,type){

    const div =
    document.createElement("div");

    div.style.padding = "12px";
    div.style.marginBottom = "10px";
    div.style.borderRadius = "10px";

    if(type === "user"){

        div.style.background =
        "#06B6D4";

    }else{

        div.style.background =
        "#1E293B";

    }

    div.innerText = message;

    chatMessages.appendChild(div);

    chatMessages.scrollTop =
    chatMessages.scrollHeight;

}

// Profile

const profileData =
document.getElementById("profileData");

profileData.innerHTML = `

<p><strong>Name:</strong> Hassan Megahed</p>

<p><strong>Role:</strong> Quality Manager</p>

<p><strong>Platform:</strong> Quality AI Academy</p>

`;

// Startup Message

console.log(
"QAI Platform Loaded Successfully"
);
