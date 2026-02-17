const form = document.getElementById("cvForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const cvData = {
            name: document.getElementById("name").value,
            profession: document.getElementById("profession").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            about: document.getElementById("about").value,
            skills: document.getElementById("skills").value
        };

        localStorage.setItem("cvData", JSON.stringify(cvData));
        window.location.href = "cv.html";
    });
}

// Загрузка данных
if (window.location.pathname.includes("cv.html")) {
    const data = JSON.parse(localStorage.getItem("cvData"));

    if (data) {
        document.getElementById("cvName").textContent = data.name;
        document.getElementById("cvProfession").textContent = data.profession;
        document.getElementById("cvEmail").textContent = "Email: " + data.email;
        document.getElementById("cvPhone").textContent = "Телефон: " + data.phone;
        document.getElementById("cvAbout").textContent = data.about;

        const skillsArray = data.skills.split(",");
        const skillsList = document.getElementById("cvSkills");

        skillsArray.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });
    }
}