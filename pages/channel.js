export default class extends React.Component {
    static async getInitialProps({ query }) {
        let idChannel = query.id;
        let req = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
        let { body: { channel } } = await req.json()
        return { channel }
      }

    render() {
        const { channel } = this.props;
        return <h1> { channel.title }</h1>
    }
}
