import Link from "next/link";
import Head from "next/head"
export default class Layout extends React.Component {
    render() {
        const { children, title } = this.props
        return <div>
            <Head>
                <title>{title}</title>
                <meta>
                </meta>
            </Head>
            <header>
                <Link href="/">
                    <a>
                        Podcasts
                    </a>
                </Link>
            </header>
            { children }
            <style jsx>{`
              header {
                color: #fff;
                background: #171614;
                padding: 15px;
                text-align: center;
                }
            header a {
                    color: #fff;

            `}
            </style>
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
