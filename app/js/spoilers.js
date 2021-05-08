let spoilers = document.querySelectorAll('.spoiler__title');
let spoilersWrapper = document.querySelector('.spoilers-wrapper');

for(let i = 0; i < spoilers.length; i++) {
  spoilers[i].addEventListener('click', function(event) {
    if(spoilersWrapper.classList.contains('spoilers-wrapper_oneOnly')) {
      for(i = 0; i < spoilers.length; i++) {
        if(spoilers[i] !== event.target) {
          spoilers[i].classList.remove('spoiler__title_active');
          spoilers[i].nextElementSibling.style.maxHeight = null;

          this.parentElement.parentElement.parentElement.classList.remove('company-spoiler');
          this.parentElement.previousElementSibling.classList.remove('article__img--active');
        }
      }
    }
    this.classList.toggle('spoiler__title_active');
    this.parentElement.parentElement.parentElement.classList.toggle('company-spoiler');
    this.parentElement.previousElementSibling.classList.toggle('article__img--active');

    let text = this.nextElementSibling;
    if(text.style.maxHeight) {
      text.style.maxHeight = null;
    } else {
      text.style.maxHeight = text.scrollHeight + 'px';
    }
  })
}
