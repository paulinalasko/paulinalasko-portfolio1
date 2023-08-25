window.onload = function () {
    document.body.className += "loaded";
}

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 110;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    })

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(current)) {
            link.classList.add('active');
        }
    })
})