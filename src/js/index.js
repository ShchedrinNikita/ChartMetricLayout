import $ from 'jquery';
import '../../index.html'
import '../components/_main.sass'
import initBurger from '../components/modules/burger-menu/burgerMenu'
$(function(){
    initBurger('.burger-menu_md', $)
})