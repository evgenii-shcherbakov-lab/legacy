const 
    def = {
        vars: {
            '--accent_color': 'rgb(235,0,40)',
            '--accent_opacity-color': 'rgba(235,0,40,.5)',

            '--main_bg-color': 'hsl(0,0%,0%)',
            '--main_text-color': 'hsl(0,0%,85%)',

            '--secondary_bg-color': 'hsl(0,0%,8%)',
            '-secondary_text-color': 'hsl(0,0%,55%)',

            '--divider_color': 'hsl(0,0%,12%)',
            '--hover_bg-color': 'hsl(0,0%,10%)',

            '--font_family': 'Open Sans',

            'H': 0,
            'S': 0
        },
        values: {
            'darkModeValue': true
        },
        checked: {
            'ACChecked': 'ac2',
            'TCChecked': 'tc0',
            'FChecked': 'f0'
        },
        preloader: 'default'
    },
    themeConfig = {
        radioVar: [
            {
                name: 'accent-color',
                prefix: 'ac',
                vars: [
                    '--accent_color',
                    '--accent_opacity-color'
                ],
                checkedKey: 'ACChecked'
            },
            {
                name: 'theme-color',
                prefix: 'tc',
                vars: ['H','S'],
                checkedKey: 'TCChecked'
            },
            {
                name: 'font-family',
                prefix: 'f',
                vars: ['--font_family'],
                checkedKey: 'FChecked'
            }
        ],
        radioClass: [

        ],
        checkboxClass: [
            {
                name: 'dark-mode',
                true: 'dark',
                false: 'light',
                valueKey: 'darkModeValue',
                valueStock: true,
                ids: [
                    'dark-mode0',
                    'dark-mode1'
                ],
                elements: [
                    document.querySelectorAll('body')
                ],
                dependensies: []
            }
        ],
        svgColors: [
            'none',
            'var(--accent_color, rgb(235,0,40))',
            'var(--main_bg-color, hsl(0,0%,0%))',
            'var(--main_text-color, hsl(0,0%,85%))',
            'var(--secondary_bg-color, hsl(0,0%,8%))',
            'var(--secondary_text-color, hsl(0,0%,55%))'
        ]
    };