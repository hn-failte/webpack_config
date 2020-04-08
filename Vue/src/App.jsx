import Home from './pages/Home.jsx';
import styles from './App.styl'

export default {
    components: {
        home: Home
    },
    render() {
        return (<div class={styles.app}>
            <home />
        </div>)
    }
}
