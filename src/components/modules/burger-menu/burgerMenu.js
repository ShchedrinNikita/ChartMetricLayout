function initBurger(selector, $) {
    $(selector).find('> .hamburger').click(function(){
        $(this).toggleClass('is-active')
        $(this).siblings('.hidden-part').slideToggle()
    })
}
export default initBurger