const wrapper__desc = document.querySelectorAll('.wrapper__desc-desc'),
      wrapper__btns = document.querySelectorAll('.wrapper__btns-btn'),
      seven7 = document.querySelector('.seven7');
for (let i = 0; i < wrapper__btns.length; i++) {
    for (let k = 0; k < wrapper__desc.length; k++) {
        wrapper__btns[i].addEventListener('click',() => {
            wrapper__btns[k].classList.remove('active')
            wrapper__desc[k].classList.remove('active')
            wrapper__btns[i].classList.add('active')
            wrapper__desc[i].classList.add('active')
        })
        seven7.addEventListener('click', () => {
            wrapper__btns[i].classList.remove('active')
            wrapper__desc[k].classList.remove('active')
        })
    }
}