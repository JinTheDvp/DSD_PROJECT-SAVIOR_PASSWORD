// RESPONSIVE ANIMATED NAVBAR (USING BOOTSTRAP)
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// PASSWORD GENERATOR.
const password = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const accBtn = document.getElementById("accept_button");
const clipboard = document.getElementById("clipboard");
const message = document.getElementById("message");
let randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+-=?@^_";

function generatePsw() {
    accBtn.addEventListener('click', () => {
        accBtn.setAttribute("style", "background-color: gray; border-radius: 5px; border; 1px")
        setTimeout(() => {
            accBtn.setAttribute("style", "background-color: white; border-radius: 5px; border; 1px")
        }, 100)
    })

    const charNumber = parseInt(document.getElementById("charNumber").value);
    
    
    if (charNumber <= 3 || charNumber >= 21) {
        alert("Error: Se deben colocar entre 4 a 20 caracteres.");
        location.reload();
    } else if (isNaN(charNumber) == true) {
        alert("Error: Se deben colocar solo números.");
        location.reload();
    }

    generateBtn.addEventListener("click", () => {
        generateBtn.setAttribute("style", "margin-top: 20px; border-radius: 5px; background-color: red")
        setTimeout(() => {
            generateBtn.setAttribute("style", "margin-top: 20px; border-radius: 5px; background-color: brown")
        }, 100)

        let generatedPass = "";
        for (let i = 0; i < charNumber; i++) {
            let randomPsw = randomChars[Math.floor(Math.random() * randomChars.length)]
            generatedPass += randomPsw;
        }
        password.innerText = generatedPass;
    });

    clipboard.addEventListener("click", () => {
        navigator.clipboard.writeText(password.innerText);
        message.innerHTML = "<b style='color: aquamarine;'> ¡Contraseña copiada al portapapeles! </b>";
        message.style.display = "block";
        setTimeout(() => {
            message.style.display = "none";
        }, 1500);
    });
}

function accBtn_animation() {
    const accept_button = document.getElementById("accept_button");

    
}
