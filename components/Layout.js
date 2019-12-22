import Link from "next/link";

export default class Layout extends React.Component {
    render() {
        return  <div>
            <header>
                <Link href="/">
                <a>
                    Podcasts
                </a>
                </Link>
              </header>
            <style jsx>{`
              header {
                color: #fff;
                background: #171614;
                padding: 15px;
                text-align: center;
            header a {
                    color: #fff;
            `}
            </style>
        </div>
    }
}
