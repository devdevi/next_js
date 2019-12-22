import Link from 'next/link';
import Layout from '../components/Layout';
import PodcastsList from '../components/PodcastList';
import Error from 'next/error'
export default class extends React.Component {
  static async getInitialProps({ query, res}) {
    let idChannel = query.id;
    try {
        // Acemos todas las peticiones el orden que pasamos arriba
        let [reqChannel, reqSeries, reqAudios] = await Promise.all([
          fetch(`https://api.audioboom.com/channels/${idChannel}`),
          fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
          fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)]
        )
        if (reqChannel.status >= 404 ){
          return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status}
        }


        // let { body: { channel } } = await req.json()
        let dataChannel = await reqChannel.json()
        let channel = dataChannel.body.channel

        // let { body: { channel } } = await reqAudio.json()
        let dataAudio = await reqAudios.json()
        let audioClips = dataAudio.body.audio_clips

        // let { body: { channel } } = await reqAudio.json()
        let dataSeries = await reqSeries.json()
        let series = dataSeries.body.channels

        return { channel, audioClips, series, statusCode:200}

    } catch(e) {
      return { channel: null, audioClips: null, series: null, statusCode: 503}
    }
  }

  render() {
    const { channel, audioClips, series, statusCode } = this.props
    if (statusCode !== 200 ) {
      return <Error statusCode={ statusCode}/>
    }
    return <Layout title={ channel.title}>
      {/* jsx */}
    <PodcastsList
      channel={channel}
      audioClips={ audioClips }
      series={ series }
      />
   </Layout>
  }
}
