const welcome_logo = document.getElementById("Welcome");
const about_me = document.getElementById("about_me");
const skills = document.getElementById("skills");
const coding_experience = document.getElementById("coding_experience");
const involvements = document.getElementById("involvements")
const bar = document.getElementById("bar")

welcome_logo.addEventListener('click', function() {
    let hue = Math.floor(Math.random() * 360);

    welcome_logo.style.color = `hsl(${hue}, 100%, 50%)`;
    welcome_logo.style.backgroundColor = `hsla(${hue}, 100%, 50%, 0.25)`;
    welcome_logo.style.borderColor = `hsla(${hue}, 100%, 50%, 0.5)`;
    about_me.style.backgroundColor = `hsla(${hue}, 100%, 75%, 0.6)`;
    about_me.style.borderColor = `hsla(${hue}, 100%, 50%, 0.5)`;
    skills.style.backgroundColor = `hsla(${hue}, 100%, 50%, 0.7)`;
    skills.style.borderColor = `hsla(${hue}, 100%, 50%, 0.5)`;
    coding_experience.style.backgroundColor = `hsla(${hue}, 100%, 75%, 0.6)`;
    coding_experience.style.borderColor = `hsla(${hue}, 100%, 50%, 0.5)`;
    involvements.style.backgroundColor = `hsla(${hue}, 100%, 50%, 0.7)`;
    involvements.style.borderColor = `hsla(${hue}, 100%, 50%, 0.5)`;
    bar.style.backgroundColor = `hsla(${hue}, 100%, 50%, 0.7)`;
    bar.style.borderColor = `hsla(${hue}, 100%, 50%, 0.5)`;
})

