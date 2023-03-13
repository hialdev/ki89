const hero = $('.hero-carousel');
hero.owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    margin:10,
    items:1,
});
hero.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        hero.trigger('next.owl');
    } else {
        hero.trigger('prev.owl');
    }
    e.preventDefault();
});

const service = $('.service-carousel');
service.owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

// Go to the next item
$('.service-next').click(function() {
    service.trigger('next.owl.carousel');
})
// Go to the previous item
$('.service-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    service.trigger('prev.owl.carousel', [300]);
})

const project = $('.project-carousel');
project.owlCarousel({
    loop:true,
    nav:false,
    dotsContainer: '#project-dots',
    margin:10,
    items:1,
});

// Go to the next item
$('.project-next').click(function() {
    project.trigger('next.owl.carousel');
})
// Go to the previous item
$('.project-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    project.trigger('prev.owl.carousel', [300]);
})

var client = $('.client-carousel');
client.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});