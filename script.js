const welcome_logo = document.getElementById("Welcome");
const about_me = document.getElementById("about_me");
const skills = document.getElementById("skills");
const coding_experience = document.getElementById("coding_experience");
const involvements = document.getElementById("involvements")
const bar = document.getElementById("bar")

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselDivs = document.querySelectorAll('.language');

const seo = document.querySelector('.seo');
const nhs = document.querySelector('.nhs');
const n25 = document.querySelector('.n25');
const allstarcode = document.querySelector('.allstarcode');

const involvementInfo = document.getElementById("involvement_info");
const inv1 = document.getElementById("involvement1");
const inv2 = document.getElementById("involvement2");
const inv3 = document.getElementById("involvement3");
const inv4 = document.getElementById("involvement4");

let divArray = Array.from(carouselDivs);
let involvementArray = [involvementInfo, inv1, inv2, inv3, inv4];

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

prevButton.addEventListener('click', function() {
    let currentIndex = divArray.findIndex(div => div.classList.contains('active'));
        for (let i = 0; i < divArray.length; i++) {
            divArray[i].classList.remove('active');
        }

    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = divArray.length - 1;
    }
    divArray[currentIndex].classList.add('active');

})

nextButton.addEventListener('click', function() {
    let currentIndex = divArray.findIndex(div => div.classList.contains('active'));
    for (let i = 0; i < divArray.length; i++) {
        divArray[i].classList.remove('active');
    }

    currentIndex += 1;
    if (currentIndex > divArray.length - 1) {
        currentIndex = 0;
    }
    divArray[currentIndex].classList.add('active');
})

seo.addEventListener('click', function() {
    for (let i = 0; i < involvementArray.length; i++) {
        involvementArray[i].classList.remove('on');
    }
    inv1.classList.add('on');
})

nhs.addEventListener('click', function() {
    for (let i = 0; i < involvementArray.length; i++) {
        involvementArray[i].classList.remove('on');
    }
    inv2.classList.add('on');
})

n25.addEventListener('click', function() {
    for (let i = 0; i < involvementArray.length; i++) {
        involvementArray[i].classList.remove('on');
    }
    inv3.classList.add('on');
})

allstarcode.addEventListener('click', function() {
    for (let i = 0; i < involvementArray.length; i++) {
        involvementArray[i].classList.remove('on');
    }
    inv4.classList.add('on');
})