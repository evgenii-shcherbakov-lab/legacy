// MODULE: Мои "удобняшки"

// BLOCK: переменные

const 
    sh          = 'shown',
    opacity     = '.5',
    settingsKey = 'LOSsettings',
    accent      = '--accent_color',
    defAccent   = 'rgb(235,0,40)',
    darkTheme   = 'darkModeValue';

// BLOCK: функции

const 
    f = el => document.querySelector(el),
    fa = el => document.querySelectorAll(el),
    reload = () => location.reload(),
    showEl = el => {
        if (!el.classList.contains(sh)) el.classList.add(sh)
    },
    hideEl = el => {
        if (el.classList.contains(sh)) el.classList.remove(sh)
    },
    setCss = (prop, value) => document.documentElement.style.setProperty(prop, value),
    saveCssVar = (settings, varName, value) => {
        setCss(varName, value)
        settings.vars[varName] = value
    },
    hslColor = (h, s, l) => `hsl(${h},${s}%,${l}%)`,
    makeOColor = (r, g, b) => `rgba(${r},${g},${b},${opacity})`,
    svgColor = array => {
        for (let i = 0; i < array.length; i++) for (let j = 0; j < array.length; j++)
            for (let item of document.querySelectorAll(`.g${i}${j}`)) {
                item.style.setProperty('fill', array[i])
                item.style.setProperty('stroke', array[j])
            }
    },
    writeSettings = settings => localStorage.setItem(settingsKey, JSON.stringify(settings)),
    readSettings = () => JSON.parse(localStorage.getItem(settingsKey)),
    markInput = (settings, key, name, id) => {
        f(`input[name="${name}"][id="${id}"]`).setAttribute('checked', 'checked')
        settings.checked[key] = id
    },
    varRead = (settings, array) => {
        for (let arrayItem of array)
            for (let varItem of arrayItem.vars)
                if (settings.vars[varItem] != undefined)
                    setCss(varItem, settings.vars[varItem])
    },
    varRecord = (settings, vars, values) => {
        for (let i = 0; i < vars.length; i++) {
            setCss(vars[i], values[i])
            settings.vars[vars[i]] = values[i]
        }
    },
    getTime = () => {
        let date = new Date()
        let h = date.getHours()
        let m = date.getMinutes()
        h = (h < 10) ? '0' + h : h + ''
        m = (m < 10) ? '0' + m : m + ''
        let hn = h.split('')
        return {h1: hn[0], h2: hn[1], min: m}
    },
    setColors = settings => {
        const h = settings.vars['H']
        const s = settings.vars['S']

        if (settings.values[darkTheme]) {
            saveCssVar(settings, '--main_bg-color', hslColor(h, s, 0))
            saveCssVar(settings, '--main_text-color', hslColor(h, s, 85))
            saveCssVar(settings, '--secondary_bg-color', hslColor(h, s, 8))
            saveCssVar(settings, '--secondary_text-color', hslColor(h, s, 55))
            saveCssVar(settings, '--divider_color', hslColor(h, s, 12))
            saveCssVar(settings, '--hover_bg-color', hslColor(h, s, 10))
        } else {
            saveCssVar(settings, '--main_bg-color', hslColor(h, s, 92))
            saveCssVar(settings, '--main_text-color', hslColor(h, s, 15))
            saveCssVar(settings, '--secondary_bg-color', hslColor(h, s, 100))
            saveCssVar(settings, '--secondary_text-color', hslColor(h, s, 60))
            saveCssVar(settings, '--divider_color', hslColor(h, s, 88))
            saveCssVar(settings, '--hover_bg-color', hslColor(h, s, 90))
        }
    },
    wbAccent = settings => {
        if (
            (settings.values['darkModeValue'] == true && settings.vars[accent] == 'rgb(0,0,0)') ||
            (settings.values['darkModeValue'] == false && settings.vars[accent] == 'rgb(255,255,255)')
        ) {
            varRecord(
                settings, 
                [accent, '--accent_opacity-color'], 
                ['rgb(235,0,40)', 'rgba(235,0,40,.5)']
            )
            settings.checked['ACChecked'] = 'ac2'
            reload()
        }
    },
    toggleClass = (settings, inputObj, bool) => {
        for (let elements of inputObj.elements) for (let element of elements) {
            settings.values[inputObj.valueKey] = bool

            if (bool) {
                if (!element.classList.contains(inputObj.true))
                    element.classList.add(inputObj.true)
                if (element.classList.contains(inputObj.false))
                    element.classList.remove(inputObj.false)
            } else {
                if (!element.classList.contains(inputObj.false))
                    element.classList.add(inputObj.false)
                if (element.classList.contains(inputObj.true))
                    element.classList.remove(inputObj.true)
            }
        }
    },
    classSwitch = (settings, inputObj, value) => {
        settings.values[inputObj.valueKey] = value

        for (let elements of inputObj.elements) for (let element of elements) {
            if (!element.classList.contains(value)) element.classList.add(value)

            for (let cl of inputObj.values)
                if (element.classList.contains(cl) && cl != value)
                    element.classList.remove(cl)
        }
    },
    styleRead = (settings, config) => {
        for (let radioObj of config.radioClass)
            classSwitch(settings, radioObj, settings.values[radioObj.valueKey])

        for (let checkboxObj of config.checkboxClass)
            toggleClass(settings, checkboxObj, settings.values[checkboxObj.valueKey])
    },
    recolorAccent = (settings, elements) => {
        if (
            settings.vars[accent] == 'rgb(0,0,0)' || 
            settings.vars[accent] == 'rgb(255,255,255)'
        ) for (let el of elements) {
            el.style.setProperty(accent, defAccent)
        }
    },
    radioChecked = (settings, config) => {
        for (let inputObj of config.radioVar.concat(config.radioClass))
            markInput(settings, inputObj.checkedKey, inputObj.name, settings.checked[inputObj.checkedKey])
    },
    onCheckbox = inputObj => {
        const checkboxes = fa(`input[type="checkbox"][name="${inputObj.name}"]`)
    
        for (let checkbox of checkboxes) if (!checkbox.checked)
            checkbox.setAttribute('checked', 'checked')
        for (let deps of inputObj.dependensies) for (let dep in deps) {
            if (dep.hasAttribute('disabled')) dep.removeAttribute('disabled')
            if (dep.classList.contains('disabled')) dep.classList.remove('disabled')
        }
    },
    offCheckbox = inputObj => {
        const checkboxes = fa(`input[type="checkbox"][name="${inputObj.name}"]`)
    
        for (let checkbox of checkboxes) if (checkbox.checked)
            checkbox.removeAttribute('checked')
        for (let deps of inputObj.dependensies) for (let dep in deps) {
            if (!dep.hasAttribute('disabled')) dep.setAttribute('disabled', 'disabled')
            if (!dep.classList.contains('disabled')) dep.classList.add('disabled')
        }
    },
    checkboxChecked = (settings, config) => {
        for (let inputObj of config.checkboxClass) {
            if (settings.values[inputObj.valueKey]) onCheckbox(inputObj)
            else offCheckbox(inputObj)
        }
    },
    getTop = () => window.pageYOffset || document.documentElement.scrollTop,
    scrollableHeight = () => document.documentElement.scrollHeight - window.innerHeight,
    updateScrollIndWidth = el => {
        const w = (getTop() / scrollableHeight()) * document.documentElement.clientWidth
        el.style.setProperty('width', `${w}px`, 'important')
    },
    updatePathDashoffset = (path, pathLength) => {
        const dashOffset = pathLength - (getTop() * pathLength) / scrollableHeight()
        path.style.strokeDashoffset = `${dashOffset}px`
    },
    configNav = (array, btn, value) => { //! 1-й элемент массива - нав элемент
        const dw = document.documentElement.clientWidth
    
        if (dw <= value) {
            array[0].style.setProperty('display', 'flex', 'important')
    
            let w = 0
            for (let el of array) w += el.offsetWidth
        
            if (w < dw) btn.style.setProperty('display', 'none', 'important')
            else { 
                array[0].style.setProperty('display', 'none', 'important')
                btn.style.setProperty('display', 'flex', 'important')
            }
        }
    },
    create = (tag, classes = '', attrArray = [], content = '') => {
        const el = document.createElement(tag)
        el.className = classes
        for (let attr of attrArray) el.setAttribute(attr.name, attr.value)
        el.innerHTML = content
        return el
    },
    parseValue = value => {
        const data = JSON.parse(value)
        let varsArray = []
        let valuesArray = []

        for (let item of data) {
            varsArray.push(item.var)
            valuesArray.push(item.value)
        }

        return {vars: varsArray, values: valuesArray}
    };