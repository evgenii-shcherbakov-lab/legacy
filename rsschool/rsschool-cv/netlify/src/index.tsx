import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

console.log(`
Самопроверка по пунктам:

+ верстка валидная: +10

+ вёрстка семантическая: +20 (как минимум 11 элементов: main, header, footer, section, aside, article, figure, nav, 
h1, h3, h4)

+ для оформления СV используются css-стили: +10 (они все через SCSS стилизованы так-то)

+ контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, 
тянется во всю ширину страницы: +10

+ вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса 
прокрутки, при этом всё содержание страницы сохраняется: +10

/*
и да, на всякий случай: у примеров кода прокрутка появится при любом раскладе, это не косяк по факту
*/

+ есть меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная 
прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным: +10

+ на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у 
изображения есть атрибут alt (может быть пустым): +10

+ контакты для связи и перечень навыков оформлены в виде списка ul > li: +10

+ CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне 
английского: +10

/*
перечень навыков делать отдельной секцией я счел не нужным, так как указал в "о себе" вкратце их и 
привел список языков/фреймворков, так что считаю, что норм
*/

+ CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода 
может использоваться js-библиотека, например, highlight.js: +10

+ CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта 
открывается в новой вкладке: +10

/*
не изображение (они довольно маленькие и смысла пихать туда огроменные превьюшки я 
не вижу), но фигурка с кратким описанием проекта, датами, названием и используемыми технологиями, так, что, думаю, 
сойдет... Тут по сути выбор: либо картинки без описания, либо текстовые плашки. Я выбрал 2 вариант, так 
что сорян(
*/

+ CV выполнено на английском языке: +10

+ выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на 
GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый 
пункт): +10

- есть видеорезюме автора CV на английском языке. Продолжительность видео 3-5 минут (±15 секунд). В описание 
видео на YouTube добавлена его транскрипция на английском языке: 0

+ качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, 
поэтому некоторый субъективизм в оценке может присутствовать): +10

/*
думаю, да, на мой субъективный взгляд, даже отбросив факт написания сего CV на React + TypeScript, что, несомненно, 
добавило сложности, но все же... Так что да, думаю, учитывая перечисленные факторы, скомпенсировал отсутствие видоса 
на инглише за счет усложнения в целом...
*/

Результат самопроверки: 150 (160 - 10)



Ссылка на исходный код: https://github.com/IIPEKOLICT/rsschool-cv/tree/cv-html-css
Ссылка на репозиторий: https://github.com/IIPEKOLICT/rsschool-cv
Ссылка на Pull Request: https://github.com/IIPEKOLICT/rsschool-cv/pull/6
`)