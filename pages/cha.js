export default class extends React.Component{
    static async getInitialProps({ query }) {
        let reqChannel = await this.getChannel(query.id);
        let reqAudioClips = await this.getAudioClipsChannel(query.id);
        let reqSeries = await this.getSeries(query.id);
        return {
            channel: reqChannel.channel,
            audio_clips: reqAudioClips,
            series: reqSeries
        };
    }

    static async getChannel(idChannel) {
        let req = await fetch(`https://api.audioboom.com/channels/${idChannel}`);
        let {
            body: { channel }
        } = await req.json();
        return { channel };
    }

    static async getAudioClipsChannel(idChannel) {
        let req = await fetch(
            `https://api.audioboom.com/channels/${idChannel}/audio_clips`
        );
        let dataAudios = await req.json();
        return dataAudios.body.audio_clips;
    }

    static async getSeries(idChannel) {
        let req = await fetch(
            `https://api.audioboom.com/channels/${idChannel}/child_channels`
        );
        let dataSeries = await req.json();
        return dataSeries.body.channels;
    }

    render() {
        const { channel, audio_clips, series } = this.props;
        console.log(this.props);

        return (
            <div>
                <header>Podcasts</header>
                <h1>{channel.title}</h1>

                <h2>Series</h2>
                {series.map(serie => (
                    <div>{serie.title}</div>
                ))}

                <h2>Podcast</h2>
                {audio_clips.map(clip => (
                    <div>{clip.title}</div>
                ))}
                <style jsx>
                    {`
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
                box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
                width: 100%;
              }
              h1 {
                font-weight: 600;
                padding: 15px;
              }
              h2 {
                padding: 5px;
                font-size: 0.9em;
                font-weight: 600;
                margin: 0;
                text-align: center;
              }
            `}
          </style>
                <style jsx global>
                    {`
              body {
                margin: 0;
                font-family: system-ui;
                background: white;
              }
            `}
          </style>
            </div>
        );
    }
}
