import TweenMax from 'gsap';

'use strict';

export default class UIController {
  constructor() {
    let container = document.getElementById('main-container');
    container.style.opacity = 0;
    TweenMax.to(container, .5, {opacity: 1, ease: 'easeIn'});
    
  }
}