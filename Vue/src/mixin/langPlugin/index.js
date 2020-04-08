export default {
    data() {
        return {
            locale: 'cn',
            langs: {},
            lang: {}
        }
    },
    methods: {
        getLangs() {
            // 模拟请求
            import('@/mock/index.json').then(langs => {
                this.langs = langs;
                this.changeLang()
            }, () => {
                this.langs = {}
            });
        },
        changeLang(locale) {
            locale = locale || 'cn';
            this.lang = this.langs[locale];
        }
    },
    mounted() {
        this.getLangs()
    }
}
