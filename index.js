const navSlide = () => {
    const menuButton = document.querySelector('#nav-button');
    const navBar = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li')

    menuButton.addEventListener('click', () => {
        navBar.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ``;
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
    });
};

navSlide();





const ratings = [8, 7, 9, 8, 8, 7];

function setSkillRadius() {
    const radius = 60;

    let circumference = 2 * Math.PI * radius;

    let tags = document.querySelectorAll('.blue');

    for(let i = 0; i < tags.length; i++) {
        let offset = circumference - ratings[i] / 10 * circumference;
        tags[i].style.strokeDasharray = `${circumference} ${circumference}`;
        tags[i].style.strokeDashoffset = `${offset}`;
    }
}

function setSkillText() {
    let textBoxes = document.querySelectorAll('text');

    for(let i = 0; i < textBoxes.length; i++) {
        let value = ratings[i];
        textBoxes[i].textContent = `${value} / 10`;
    }
}


setSkillRadius();
setSkillText();
