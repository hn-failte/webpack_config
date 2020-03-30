import '@/assets/styles/footer.styl'

export default {
    data() {
        return {
            author: '<hn-failte>(failte@163.com)'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Power by {this.author}</span>
            </div>
        )
    }
}
