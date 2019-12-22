import Link from 'next/link';
export default class extends React.Component {
  static async getInitialProps({ query }) {
    let idChannel = query.id;
    // Acemos todas las peticiones el orden que pasamos arriba
    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)]
    )

    // let { body: { channel } } = await req.json()
    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    // let { body: { channel } } = await reqAudio.json()
    let dataAudio = await reqAudios.json()
    let audioClips = dataAudio.body.audio_clips

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
      <h3>Podcasts</h3>
      <ul>
        {audioClips.map((clip) => (
          <Link href={`/podcasts?id=${clip.id}`} prefetch>
            <li>
              <a className="m-2 blue" key={clip.id}>
                {clip.title}
              </a>
            </li>
          </Link>
        ))}
      </ul>
      <h3>Series</h3>
      {series.map((serie) => (
        <div className="m-2"> {serie.title}</div>
      ))}

      <style jsx>{`
        header {
          color: #fff;
          background: #171614;
          padding: 15px;
          text-align: center;
        }
        .m-2{
          margin: 1rem;
          padding: .5rem;
          cursor: pointer;
        }
        .blue{
          color: blue;
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
