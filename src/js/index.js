import $ from 'jquery';
import '../../index.html'
import '../sass/_main.sass'
import { initSlider } from './components/slider/slider'
$(function() {
  initSlider($('.slider'), 'usual')
});