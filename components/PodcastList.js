import Link from "next/link";
export default class PodcastsList extends React.Component {
    render() {
        const { channel, audioClips, series } = this.props;
        return <div>
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
                .m-2{
                margin: 1rem;
                padding: .5rem;
                cursor: pointer;
                }
                .blue{
                color: blue;
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
        </div>
    }
}
