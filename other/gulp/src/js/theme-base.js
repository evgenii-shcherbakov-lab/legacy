// MODULE: Основной модуль движка тем

const
    scrollUp                = f('.scroll-up'),
    scrollUpSvgPath         = f('.scroll-up__svg__path'),
    scrollUpSvgPathLength   = (scrollUpSvgPath != null) ? scrollUpSvgPath.getTotalLength() : 0;

let theme = (readSettings() != null) ? readSettings() : def

// BLOCK: Построение навигационного меню

if (fa('.header .nav__link').length == 0) {
    let i = 0

    fa('.section').forEach(section => {
        const text = section.querySelector('.section__header').textContent
        const link = create('a', 'nav__item link', [{name: 'href', value: `#${section.id}`}], text)
        f('.header .nav').insertBefore(link, f('.header .nav').childNodes[i])
        i++
    })
}

if (f('#dialog #nav') == null) {
    let navCont = create('div', 'dialog__block', [{name: 'id', value: 'nav'}])
    let nav = create('nav', 'nav')

    fa('.section').forEach(section => {
        const text = section.querySelector('.section__header').textContent
        const link = create('a', 'nav__item link', [{name: 'href', value: `#${ section.id}`}], text)
        nav.append(link)
    })

    if (f('.header__bottom #settings-icon') != null) 
        nav.append(create('a', 'nav__item link', [{name: 'href', value: 'https://iipekolict.github.io/settings.html'}], 'Настройки'))

    navCont.append(create('h3', 'dialog__block__header', [], 'Навигация'))
    navCont.append(nav)
    f('#dialog #dialog-container').append(navCont)
}

// BLOCK: Выполнение в фоне

configNav([f('.nav'), f('.header__top__left')], f('.header__bottom #nav-icon'), 1024)

// BLOCK: Якорь

if (scrollUp != null) {
    scrollUpSvgPath.style.strokeDasharray = `${scrollUpSvgPathLength}px ${scrollUpSvgPathLength}px`
    scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms'
}

// BLOCK: Загрузка страницы

document.addEventListener('DOMContentLoaded', () => {
    varRead(theme, themeConfig.radioVar)
    styleRead(theme, themeConfig)
    svgColor(themeConfig.svgColors)
    setColors(theme)
    wbAccent(theme)
    writeSettings(theme)

    window.scrollTo({top: 0})

    if (f('.header__top__scroll-indicator') != null)
        updateScrollIndWidth(f('.header__top__scroll-indicator'))

    fa('.section').forEach(section => {
        let i = 1
        section.querySelectorAll('.menu-item').forEach(menuItem => {
            if (menuItem.querySelector('.menu-item__icon') != null) {
                if (menuItem.querySelector('.menu-item__icon').innerHTML === '')
                    menuItem.querySelector('.menu-item__icon').innerHTML = i;
                i++
            }
        })
    })
    
    setTimeout(() => {
        for (let preloader of fa('.preloader'))
            hideEl(preloader)

        if (theme.preloader != 'default') {
            theme.preloader = 'default'
            writeSettings(theme)
        }
    }, 300);
})

// BLOCK: Скроллинг

window.addEventListener('scroll', () => {
    if (pageYOffset > 0 || document.documentElement.scrollTop > 0) {
        f('.header').classList.add('scroll')
        f('.main').classList.add('scroll')
    } else {
        f('.header').classList.remove('scroll')
        f('.main').classList.remove('scroll')
    }

    if (f('.header__top__scroll-indicator') != null)
        updateScrollIndWidth(f('.header__top__scroll-indicator'))

    updatePathDashoffset(scrollUpSvgPath, scrollUpSvgPathLength)

    if (getTop() > document.documentElement.clientHeight) showEl(scrollUp)
    else hideEl(scrollUp)
})

// BLOCK: Ресайз страницы

window.addEventListener('resize', () => {
    configNav([f('.nav'), f('.header__top__left')], f('.header__bottom #nav-icon'), 1024)

    if (f('.header__top__scroll-indicator') != null)
        updateScrollIndWidth(f('.header__top__scroll-indicator'))
})

// BLOCK: Прелоадер

if (theme.preloader != 'theme') showEl(f('#default-preloader'))
else showEl(f('#theme-preloader'))

// BLOCK: Навигация по странице

fa('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        f(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})