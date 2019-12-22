import Link from 'next/link';
import Layout from '../components/Layout';
import PodcastsList from '../components/PodcastList'
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
