document.addEventListener("DOMContentLoaded", function () {
const swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    
    slidesPerView: 1,
    spaceBetween: 20,
    
    centeredSlides: true,
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    speed: 700,
    
    rtl: true,
});


/*==============================
      اسکرول خرید بلیت
==============================*/

const ticketBtn = document.querySelector(".ticket-shortcut");

if(ticketBtn){

    ticketBtn.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector("#ticket").scrollIntoView({

            behavior:"smooth"

        });

    });

}

/*==============================
      انیمیشن ورود پوستر
==============================*/

const poster = document.querySelector(".show-header img");

if(poster){

    poster.animate(

        [

            {
                transform:"scale(1.08)",
                opacity:.7
            },

            {
                transform:"scale(1)",
                opacity:1
            }

        ],

        {

            duration:900,

            easing:"ease-out",

            fill:"forwards"

        }

    );

}

const gallerySwiper = new Swiper(".gallerySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".gallery-pagination",
        clickable: true,
    },

    speed: 700,
});
        document.querySelector("#ticket").scrollIntoView({

            behavior:"smooth"

        });

    });

}

/*==============================
      انیمیشن ورود پوستر
==============================*/

const poster = document.querySelector(".show-header img");

if(poster){

    poster.animate(

        [

            {
                transform:"scale(1.08)",
                opacity:.7
            },

            {
                transform:"scale(1)",
                opacity:1
            }

        ],

        {

            duration:900,

            easing:"ease-out",

            fill:"forwards"

        }

    );

}

const gallerySwiper = new Swiper(".gallerySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".gallery-pagination",
        clickable: true,
    },

    speed: 700,
});

});
