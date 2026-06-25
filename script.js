// =========================
// Quality AI Academy
// Developed By Hassan Megahed
// =========================

// Language System

let currentLang = "en";

const langBtn = document.getElementById("langBtn");

langBtn.addEventListener("click", () => {

    const items = document.querySelectorAll(".sidebar li");

    if(currentLang === "en"){

        currentLang = "ar";

        document.body.dir = "rtl";

        langBtn.innerHTML = "🇺🇸 English";

        items.forEach(item=>{
            item.innerHTML = item.getAttribute("data-ar");
        });

        document.getElementById("welcomeTitle").innerText = "أهلاً بك";

        document.getElementById("welcomeText").innerText =
        "الجودة تبدأ من الاهتمام بالتفاصيل الصغيرة.";

        document.getElementById("motivationTitle").innerText =
        "رسالة تحفيزية";

    }else{

        currentLang = "en";

        document.body.dir = "ltr";

        langBtn.innerHTML = "🇪🇬 العربية";

        items.forEach(item=>{
            item.innerHTML = item.getAttribute("data-en");
        });

        document.getElementById("welcomeTitle").innerText =
        "Welcome";

        document.getElementById("welcomeText").innerText =
        "Quality starts with attention to detail.";

        document.getElementById("motivationTitle").innerText =
        "Daily Motivation";
    }

    showRandomMotivation();

});

// Sidebar Mobile

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click",()=>{

    sidebar.classList.toggle("active");

});

// Motivational Messages

const motivationEN = [

"Discovering one defect before shipment is better than apologizing later.",

"A clean workplace today prevents tomorrow's mistakes.",

"Quality is everyone's responsibility.",

"Small improvements create big results.",

"Attention to detail makes the difference.",

"Teamwork creates quality.",

"Inspection prevents customer complaints.",

"Every garment tells a story of quality."

];

const motivationAR = [

"اكتشاف عيب قبل الشحن أفضل من الاعتذار لاحقاً.",

"نظافة مكان العمل اليوم تمنع أخطاء الغد.",

"الجودة مسؤولية الجميع.",

"التحسينات الصغيرة تصنع نتائج كبيرة.",

"الاهتمام بالتفاصيل يصنع الفارق.",

"العمل الجماعي يصنع الجودة.",

"الفحص الجيد يقلل شكاوى العملاء.",

"كل قطعة تحكي قصة جودة."
];

function showRandomMotivation(){

    const text = document.getElementById("motivationText");

    if(currentLang==="ar"){

        text.innerText =
        motivationAR[
            Math.floor(
                Math.random()*motivationAR.length
            )
        ];

    }else{

        text.innerText =
        motivationEN[
            Math.floor(
                Math.random()*motivationEN.length
            )
        ];
    }

}

showRandomMotivation();

// User Registration

function initUser(){

    let user = localStorage.getItem("qai_user");

    if(!user){

        const fullName =
        prompt("Enter Your Full Name");

        const position =
        prompt("Enter Your Position");

        const department =
        prompt("Enter Your Department");

        const newUser = {

            name:fullName || "Guest",

            position:position || "",

            department:department || "",

            points:0,

            level:"Beginner"

        };

        localStorage.setItem(
            "qai_user",
            JSON.stringify(newUser)
        );

        user = JSON.stringify(newUser);
    }

    const userData = JSON.parse(user);

    console.log(userData);

}

initUser();

// Daily Welcome Message

function welcomeMessage(){

    const user =
    JSON.parse(
        localStorage.getItem("qai_user")
    );

    setTimeout(()=>{

        if(currentLang==="ar"){

            alert(
            "👋 مرحباً " +
            user.name +
            "\n\nنتمنى لك رحلة تعليمية ممتعة.\n\nHassan Megahed\nQuality Manager"
            );

        }else{

            alert(
            "👋 Welcome " +
            user.name +
            "\n\nWe wish you a successful learning journey.\n\nHassan Megahed\nQuality Manager"
            );

        }

    },1000);

}

welcomeMessage();

// Points System

function addPoints(value){

    const user =
    JSON.parse(
        localStorage.getItem("qai_user")
    );

    user.points += value;

    if(user.points >= 600){

        user.level = "Quality Expert";

    }else if(user.points >= 300){

        user.level = "Senior Inspector";

    }else if(user.points >= 100){

        user.level = "Inspector";

    }

    localStorage.setItem(
        "qai_user",
        JSON.stringify(user)
    );

}

// Daily Quote Rotation

setInterval(()=>{

    showRandomMotivation();

},10000);

console.log(
"Quality AI Academy Loaded Successfully"
);
