const btnSwitch = document.querySelector('#switch-mode');



btnSwitch.addEventListener("click", () => {
    btnSwitch.classList.toggle('active');
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem("darkMode", "true")
    } else {
        localStorage.setItem("darkMode", "false")
    };

    if (localStorage.getItem("darkMode") === "true") {
        btnSwitch.classList.add('active');
        document.body.classList.add('dark');
    } 
});