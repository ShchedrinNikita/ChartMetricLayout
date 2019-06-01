function initBurger(selector, $) {
    $(selector).find('> .hamburger').click(function(){
        $(this).toggleClass('is-active')
        $(this).siblings('.hidden-part').slideToggle()
        $(this).parents('.header_cn').toggleClass('white')
    })
}
export default initBurger