// ===============================
// زر اكتشف موروث
// ===============================

const discoverBtn = document.getElementById("discoverBtn");

discoverBtn.addEventListener("click", () => {

    document.getElementById("about").scrollIntoView({

        behavior: "smooth"

    });

});

// ===============================
// تغيير شكل الـ Navbar
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "10px 8%";
        header.style.background = "rgba(255,255,255,.97)";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";

    } else {

        header.style.padding = "15px 8%";
        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

// ===============================
// ظهور الأقسام عند التمرير
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});

// ===============================
// زر العودة للأعلى
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
left:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#6B1E2E;
color:#fff;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 5px 15px rgba(0,0,0,.2);
transition:.3s;
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===============================
// تأثير Hover لزر العودة
// ===============================

topBtn.addEventListener("mouseenter", () => {

    topBtn.style.transform = "scale(1.1)";
    topBtn.style.background = "#A67C52";

});

topBtn.addEventListener("mouseleave", () => {

    topBtn.style.transform = "scale(1)";
    topBtn.style.background = "#6B1E2E";

});