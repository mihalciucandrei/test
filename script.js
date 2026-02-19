// Получаем форму
const form = document.getElementById("cvForm");


// ==========================
// СОХРАНЕНИЕ ДАННЫХ
// ==========================
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // отменяем перезагрузку страницы

        // Собираем данные из формы
        const cvData = {
            name: document.getElementById("name").value,
            profession: document.getElementById("profession").value,
            location: document.getElementById("location").value,

            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            github: document.getElementById("github").value,
            linkedin: document.getElementById("linkedin").value,

            about: document.getElementById("about").value,
            techStack: document.getElementById("techStack").value,
            skills: document.getElementById("skills").value,
            experience: document.getElementById("experience").value,
            projects: document.getElementById("projects").value,
            education: document.getElementById("education").value,
            certificates: document.getElementById("certificates").value,
            languages: document.getElementById("languages").value
        };

        // Сохраняем в localStorage
        localStorage.setItem("cvData", JSON.stringify(cvData));

        // Переход на страницу просмотра
        window.location.href = "cv.html";
    });
}


// ==========================
// ЗАГРУЗКА ДАННЫХ
// ==========================
if (window.location.pathname.includes("cv.html")) {

    // Получаем данные из localStorage
    const data = JSON.parse(localStorage.getItem("cvData"));

    if (data) {

        // Основная информация
        document.getElementById("cvName").textContent = data.name;
        document.getElementById("cvProfession").textContent = data.profession;
        document.getElementById("cvLocation").textContent = data.location;

        // Контакты
        document.getElementById("cvEmail").textContent = data.email;
        document.getElementById("cvPhone").textContent = data.phone;
        document.getElementById("cvGithub").textContent = data.github;
        document.getElementById("cvLinkedin").textContent = data.linkedin;

        // О себе
        document.getElementById("cvAbout").textContent = data.about;


        // Функция для заполнения списков (ul)
        function fillList(id, text) {
            const container = document.getElementById(id);
            container.innerHTML = ""; // очищаем

            if (text) {
                text.split("\n").forEach(item => {
                    if (item.trim() !== "") {
                        const li = document.createElement("li");
                        li.textContent = item.trim();
                        container.appendChild(li);
                    }
                });
            }
        }

        // Заполняем списки
        fillList("cvTechStack", data.techStack);
        fillList("cvSkills", data.skills);
        fillList("cvCertificates", data.certificates);
        fillList("cvLanguages", data.languages);


        // Функция для заполнения блоков (div)
        function fillBlock(id, text) {
            const container = document.getElementById(id);
            container.innerHTML = ""; // очищаем

            if (text) {
                text.split("\n").forEach(item => {
                    if (item.trim() !== "") {
                        const p = document.createElement("p");
                        p.textContent = item.trim();
                        container.appendChild(p);
                    }
                });
            }
        }

        // Заполняем текстовые блоки
        fillBlock("cvExperience", data.experience);
        fillBlock("cvProjects", data.projects);
        fillBlock("cvEducation", data.education);
    }
}
