$(document).ready(function(){
// filter position at scroll
    let innerMainHeight = $('.hero-inner-main').height();
    let filterSectHeight = $('.filter-sect').height();

    window.addEventListener("scroll", function(){
        let windowY = this.scrollY;

        if (windowY >= 200 && windowY <= innerMainHeight - filterSectHeight){
            $('.filter-sect').css({
                "top": windowY,
                "transition": "0s",
            });
        } else if (windowY <= 200){
            $('.filter-sect').css({
                "top": "91px",
                "transition": "0.15s ease-out",
            });
        };
    });

// open products-catalog
    $('.products-catalog-toggle').click(function(){
        $('.products-catalog').toggleClass('catalog_none');
        $('#catalogToggleImg').toggleClass('display_none');
        $('#catalogToggleImg2').toggleClass('display_none');
        $('.shop-cart-toggle').toggleClass('hide_elements');
        $('.personal-cabinet-toggle').toggleClass('hide_elements');
        $('.search-bar').toggleClass('hide_elements');
    });
});