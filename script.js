const btn = document.getElementById("btn");
const skills = document.getElementById("skills");

btn.addEventListener("click", () => {
    skills.classList.toggle("hidden");

    btn.textContent = skills.classList.contains("hidden")
        ? "Voir mes compétences"
        : "Masquer mes compétences";
});