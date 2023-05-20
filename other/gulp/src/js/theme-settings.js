// MODULE: Дополнительный модуль движка тем (для настроек)

// BLOCK: Обработчики инпутов

for (let radioObj of themeConfig.radioVar)
    fa(`input[name="${radioObj.name}"]`).forEach(input => {
        input.addEventListener('change', () => {
            const inputValue = parseValue(input.value)

            varRecord(theme, inputValue.vars, inputValue.values)
            theme.checked[radioObj.checkedKey] = input.id
            writeSettings(theme)

            if (radioObj.name == 'accent-color' || radioObj.name == 'theme-color') setColors(theme)
        })
    })

// for (let radioClassObj of themeConfig.radioClass)
//     fa(`input[name="${radioClassObj.name}"]`).forEach(input => {
//         input.addEventListener('change', () => {
//             theme.preloader = 'theme'
//             showEl(f('#theme-preloader'))

//             for (let i = 0; i < radioClassObj.values.length; i++) {
//                 if (radioClassObj.prefix + i == input.id) {
//                     classSwitch(theme, radioClassObj, radioClassObj.values[i])
//                     theme.checked[radioClassObj.checkedKey] = input.id
//                     writeSettings(theme)
//                 }
//             }
            
//             writeSettings(theme)
//             reload()
//         })
//     })

for (let checkboxObj of themeConfig.checkboxClass)
    fa(`input[name="${checkboxObj.name}"]`).forEach(input => {
        input.addEventListener('change', () => {
            theme.preloader = 'theme'
            showEl(f('#theme-preloader'))

            if (input.checked) toggleClass(theme, checkboxObj, true)
            else toggleClass(theme, checkboxObj, false)
            
            writeSettings(theme)
            reload()
        })
    })

// BLOCK: Загрузка страницы

document.addEventListener('DOMContentLoaded', () => {
    radioChecked(theme, themeConfig)
    checkboxChecked(theme, themeConfig)

    if (theme.values['darkModeValue'] === true) {
        fa('.label__colored').forEach(label => {
            if (theme.values['darkModeValue'] === true) {
                if (label.getAttribute('style').includes('black')) 
                    if (label.querySelector('input').getAttribute('name') == 'accent-color')
                        label.style.setProperty('display', 'none')
                    else label.style.setProperty(accent, 'white')
            } else {
                if (label.getAttribute('style').includes('white')) label.style.setProperty('display', 'none')
            }
        })
    }

    recolorAccent(theme, [f('#about')])
})