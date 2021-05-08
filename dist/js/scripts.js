"use strict";

var spoilers = document.querySelectorAll('.spoiler__title');
var spoilersWrapper = document.querySelector('.spoilers-wrapper');

var _loop = function _loop(_i) {
  spoilers[_i].addEventListener('click', function (event) {
    if (spoilersWrapper.classList.contains('spoilers-wrapper_oneOnly')) {
      for (_i = 0; _i < spoilers.length; _i++) {
        if (spoilers[_i] !== event.target) {
          spoilers[_i].classList.remove('spoiler__title_active');

          spoilers[_i].nextElementSibling.style.maxHeight = null;
          this.parentElement.parentElement.parentElement.classList.remove('company-spoiler');
          this.parentElement.previousElementSibling.classList.remove('article__img--active');
        }
      }
    }

    this.classList.toggle('spoiler__title_active');
    this.parentElement.parentElement.parentElement.classList.toggle('company-spoiler');
    this.parentElement.previousElementSibling.classList.toggle('article__img--active');
    var text = this.nextElementSibling;

    if (text.style.maxHeight) {
      text.style.maxHeight = null;
    } else {
      text.style.maxHeight = text.scrollHeight + 'px';
    }
  });

  i = _i;
};

for (var i = 0; i < spoilers.length; i++) {
  _loop(i);
}