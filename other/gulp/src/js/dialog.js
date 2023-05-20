// MODULE: Диалоговые окна

const
    dia = f('#dialog'),
    diaCont = f('#dialog-container'),
    diaBtn = f('#dialog-btn'),
    diaBlocks = fa('.dialog__block'),
    navItems = fa('#dialog .nav__item');

// BLOCK: Скрытие диалогового окна

const hideDialog = () => {
    hideEl(dia);
    for (let block of diaBlocks) hideEl(block)
}

// BLOCK: Обработчик нажатий в диалоговой зоне

dia.onclick = event => {
    for (let navItem of navItems) if (
        (event.target != diaCont && !diaCont.contains(event.target)) ||
        (event.target == diaBtn || event.target == navItem)
    ) hideDialog();
}

// BLOCK: Показ диалогового окна

const showDialog = (blockId) => {
    showEl(dia);
    for (let block of diaBlocks) 
        if (block.getAttribute('id') == blockId) showEl(block)
        else hideEl(block)
}

// BLOCK: Загрузка страницы

document.addEventListener('DOMContentLoaded', () => hideEl(dia))