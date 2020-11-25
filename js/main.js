const buttons = document.querySelectorAll('.btn-any');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const modalButtons = document.querySelectorAll('.btn-modal');
const close = document.querySelector('.modal__close');


for (let i = 0; i < buttons.length; i++) {
    modalOpen(i);
}

function modalOpen(i) {
    buttons[i].addEventListener('click', () => {
        backdrop.classList.remove('fade-out');
        modal.classList.remove('fade-out');
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
};

modal.addEventListener('keydown', (e) => {
    e.preventDefault();

    if (e.keyCode === 9 && document.activeElement === close) {
        modalButtons[0].focus();
    }
    else if (e.keyCode === 9 && document.activeElement === modalButtons[0]) {
        modalButtons[1].focus();
    }
    else if (e.keyCode === 9 && document.activeElement === modalButtons[1]) {
        close.focus();
    }
})



function fadeOut() {
    backdrop.classList.add('fade-out');
    modal.classList.add('fade-out');
    setTimeout(() => {
        backdrop.style.display = 'none';
        modal.style.display = 'none';
    }, 300)
}


for (let i = 0; i < modalButtons.length; i++) {
    modalButtons[i].addEventListener('click', () => {
        fadeOut();
    })
}

close.addEventListener('click', () => {
    fadeOut();
})

backdrop.addEventListener('click', () => {
    fadeOut();
})