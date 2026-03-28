// ===== INTRO ANIMATION =====
document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".line, .title, .quote");

    lines.forEach((el,i)=>{
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";

        setTimeout(()=>{
            el.style.transition = "1s";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, i*1500);
    });
});

// ===== NAVIGATION =====
function goStudents(){ location.href="student.html"; }
function goMemories(){ location.href="memories.html"; }