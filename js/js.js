let navbar = document.querySelector('.navigation-nav-nav'),
    navbarItem = document.querySelectorAll('.navigation-nav-items'),
    button = document.querySelector('.navigation-nav > button'),
    ulList = document.querySelector('.navigation-nav-nav'),
    navInfo = document.querySelector('.nav-information'),
    navContact = document.querySelector('.nav-contact'),
    navigation = document.querySelector('.navigation'),
    header = document.querySelector('.header'),
    navCategory = document.querySelectorAll('.section-our-project-control-item'),
    category = document.querySelector('.section-our-project-control-category'),
    categoryBox = document.querySelectorAll('.section-our-project-category > div'),
    footerYear = document.getElementById('year');

// HEIGHT HEADER
heightVH = () => {
    let totalAllNav = navInfo.clientHeight + navContact.clientHeight + navigation.clientHeight,
        total = document.documentElement.clientHeight - totalAllNav;

    // HEIGHT
    header.style.height = `${total}px`;
};
heightVH();

// RESIZE HEIGHT IN WINDOW
window.onresize = heightVH;

// CLICK BUTTON TOGGLE CLASS
button.onclick = () => {
    let toggleActive = 'navigation-nav-toggle--active',
        navNav = 'navigation-nav-nav--active';

    button.classList.toggle(toggleActive);
    ulList.classList.toggle(navNav);
};

// TOGGLE CLASS ACTIVE AND REMOVE CLASS ACTIVE FORM SIBLINGS
function test(array, parent) {

    for (const cur of Array.from(array)) {

        // CLICK
        cur.onclick = () => {
    
            // LOOP IN CHILDERN
            for (var i = 0; i < parent.children.length; i++) {
                parent.children[i].classList.remove('active');
            }
    
            // ADD CLASS ACTIVE
            cur.classList.add('active');
    
        }
    };

};

// RUNNING FUNCTION
let clickCategoryItem = test(navCategory, category),
clickNavItem = test(navbarItem, navbar);


// SHIFFEL IN CATEGORY
for(const cur of Array.from(navCategory)) {

    // ADD EVENT LISTENER ON EVENT CLICK
    cur.addEventListener('click', () => {
      
        // GET ATTRIBUTES FORM CONTROL ITEMS
        const dataAttr = cur.getAttribute('data-category');

        // LOOP VISIBLE DATA ATRIBUTES AND HIDDEN SIBLINGS
        for(const current of Array.from(categoryBox)) {

            current.classList.contains(dataAttr) ? current.style.opacity = 1 : current.style.opacity = .3;
                
        }

    });
};

// INCLUDE YEAR IN FOOTER
footerYear.textContent = new Date().getFullYear();

// VALIDATION FORM
const formFooter = document.forms['formFooter'],
      inputFooter = document.forms['formFooter']['inputFooter'],
      submitFooter = document.forms['formFooter']['submitFooter'],
      message = document.querySelector('.footer-message');

// EVENTS SUBMIT AND KEYUP
formFooter.onsubmit = validationForm;
formFooter.onkeyup = validationForm;

// FUNCTION VALIDATION FORM
function validationForm(e) {

   const inputValue = inputFooter.value,
         pattern = new RegExp(/^[a-zA-Z]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,6}$/) ;

    if(  inputValue == '' ) {

        // PREVENT DEFAULT
        e.preventDefault();
        message.textContent = 'sorry must be write email';

    } else if( !pattern.test( inputValue ) ) {

        // PREVENT DEFAULT
        e.preventDefault();
        message.textContent = 'sorry must be at lest 1 caracter and at less than 3 letter';

    } else {

        // CORRECT
        message.textContent = 'correct';

    }

};


// JQUERY
$(function() {

    // SCROLL SMOTHLY AND SYN SECTION TOP
    var navbarItem = $('.navigation-nav-nav > li > a');

    // CLICK SMOTHLY SCROLL
    navbarItem.on('click', function(e) {

        // PREVENT DEFAULT
        e.preventDefault();

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('target')).offset().top

        }, 2000);

    });

    // EACH ADD CLASS ACTIVE AND REMOVE CLASS ACTIVE WITH SIBLINGS
    $(window).on('scroll', function() {

        navbarItem.each(function() {

            $(window).scrollTop() > $('#' + $(this).data('target')).offset().top ? 

            $(this).parent().addClass('active').end().parent().siblings().removeClass('active') : false;

        });
        
    });



});
