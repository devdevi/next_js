export default class extends React.Component {
    static async getInitialProps({ query }) {
        let idChannel = query.id;
        let reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
        // let { body: { channel } } = await req.json()
        let dataChannel= await reqChannel.json()
        let channel = dataChannel.body.channel

        let reqAudios = await fetch(`
          https://api.audioboom.com/channels/${idChannel}/audio_clips
        `)
        // let { body: { channel } } = await reqAudio.json()
        let dataAudio = await reqAudios.json()
        let audioClips = dataAudio.body.audio_clips

        let reqSeries = await fetch( `https://api.audioboom.com/channels/${idChannel}/child_channels`)
        // let { body: { channel } } = await reqAudio.json()
        let dataSeries = await reqSeries.json()
        let series = dataSeries.body.channels

        return { channel, audioClips, series }
    }

    render() {
        const { channel, audioClips, series } = this.props;
        return <div>
            <header>Podcasts</header>
            {/* jsx */}
            <div className="channels">
                <h2>{channel.title}</h2>
            </div>
          <h3>Series</h3>
          { series.map((serie) => (
            <div> {serie.title }</div>
          ))}
          { audioClips.map((clip) => (
            <div> {clip.title }</div>
          ))}

            <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
        }
        .channels {
          display: grid;
          grid-gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
        a.channel {
          display: block;
          margin-bottom: 0.5em;
          color: #333;
          text-decoration: none;
        }
        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
          width: 100%;
        }
        h2 {
          padding: 15px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }
      `}</style>

        <style jsx global>{`
            body {
            margin: 0;
            font-family: system-ui;
            background: white;
            }
      `}</style>
        </div>
    }
}
