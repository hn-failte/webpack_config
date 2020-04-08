import styles from './home.styl'
import langPlugin from '@/mixin/langPlugin/index'

export default {
    mixins: [langPlugin],
    render() {
        const { name = '', age = '', changeEN = '', changeCN = '' } = this.lang;
        return (
            <div class={styles.home}>
                <div>{name}:<input type="text"/></div>
                <div>{age}:<input type="text"/></div>
                <div >
                    <a href="javascript: void(0)" onClick={this.changeLang.bind(this, 'en')}>{changeEN}</a>
                    <a href="javascript: void(0)" onClick={this.changeLang.bind(this, 'cn')}>{changeCN}</a>
                </div>
            </div>
        )
    }
}
