const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

    // Initialize Typed.js
    const typed = new Typed('.multiple-text', {
        strings: ['Web Developer', 'Frontend Developer'],
        typeSpeed: 50, 
        backSpeed: 30, 
        backDelay: 1000, 
        startDelay: 500, 
        loop: true 
    });

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
});

sr.reveal('.home-text', {
    delay: 350,
    origin: 'left'
});

sr.reveal('.home-img', {
    delay: 350,
    origin: 'right'
});
sr.reveal('.education',{
    delay: 350,
    origin: 'left'
})
sr.reveal('.box-container',{
    delay: 350,
    origin: 'right'
})
sr.reveal('.project',{
    delay: 350,
    origin: 'left'
})
sr.reveal('.container',{
    delay: 350,
    origin: 'right'
})
sr.reveal('.project-list',{
    delay: 350,
    origin: 'left'
})

sr.reveal('.skills',{
    delay: 350,
    origin: 'right'
})
sr.reveal('.progress-bar',{
    delay: 350,
    origin: 'right'
})
sr.reveal('.contact',{
    delay: 350,
    origin: 'right'
})
sr.reveal('.action',{
    delay: 350,
    origin: 'right'
})


sr.reveal('.sub-service,.about,educatio,project,skills,contact',{delay:350, origin:'bottom'})


// Toggle the menu visibility on mobile
const menuIcon = document.getElementById('menu-icon');
const navlist = document.getElementById('navlist');

menuIcon.addEventListener('click', () => {
    navlist.classList.toggle('active');
});
