$(document).ready(function() {
    // Selectores del menú y botón hamburguesa
    const $navbarCollapse = $('.navbar-collapse');
    const $navbarToggler = $('.navbar-toggler');

    // Cerrar menú al hacer clic fuera
    $(document).on('click', function(e) {
        // Verifica si el clic NO fue en el menú ni en el botón
        if (!$navbarCollapse.is(e.target) && 
            $navbarCollapse.has(e.target).length === 0 && 
            !$navbarToggler.is(e.target)) {
            
            // Cierra el menú si está abierto (solo en móviles)
            if ($navbarCollapse.hasClass('show') && window.innerWidth < 992) {
                $navbarCollapse.collapse('hide');
                $navbarToggler.attr('aria-expanded', 'false');
            }
        }
        // Cerrar menú al hacer clic en un enlace del menú
$('.navbar-nav .nav-link').on('click', function() {
    if (window.innerWidth < 992) {
        $navbarCollapse.collapse('hide');
    }
});
    });
});

$(document).ready(function() {
    $(document).click(function(e) {
        if ($(window).width() < 992) { // Solo en móviles
            const $navbarCollapse = $('.navbar-collapse');
            const $navbarToggler = $('.navbar-toggler');
            
            if (!$navbarCollapse.is(e.target) && 
                $navbarCollapse.has(e.target).length === 0 && 
                !$navbarToggler.is(e.target)) {
                
                $navbarCollapse.collapse('hide');
            }
        }
    });
});


// JavaScript para detectar scroll solo en móviles
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth < 992) { // Solo aplica a móviles
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled-mobile');
        } else {
            navbar.classList.remove('scrolled-mobile');
        }
    }
});

$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 37.227837, lng: -95.700513};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }

 

