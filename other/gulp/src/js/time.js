// MODULE: модуль для часиков (если час равен 1 - то подсвечивается)

// BLOCK: Функция установки времени
    
setInterval(() => {
    let time = getTime()

    if (time.h1 == 1) f('.hour:first-of-type').classList.add('text--accent')
    else f('.hour:first-of-type').classList.remove('text--accent')
    if (time.h2 == 1) f('.hour:first-of-type + .hour').classList.add('text--accent')
    else f('.hour:first-of-type + .hour').classList.remove('text--accent')

    f('.hour:first-of-type').innerHTML = time.h1
    f('.hour:first-of-type + .hour').innerHTML = time.h2
    f('.minutes').innerHTML = time.min
}, 500);

// BLOCK: Загрузка страницы

document.addEventListener('DOMContentLoaded', () => {
    recolorAccent(theme, [f('.header__time')])
})