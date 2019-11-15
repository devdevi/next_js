export default class extends React.Component {
    render = () => <div><h2>About</h2>
    <p>
        Vrajaadhiraaja-nandanaambudabhu-gaatra chandanaa
        Nulepa-gandha-vaahiniim bhavaadhi-biija-daahiniim
        Jagat-traye yashasviniim lasat-sudhaa-payasviniim
        Bhaje kalinda-nandiniim duranta-moha-bhanjiniim</p>
    <img
    src="1502.jpg"
    alt="Logo"/>

    <style jsx>{`
    h1 {
        color: blue;
    }
    div :global(p){
      color: gray;
    }
    `}</style>
    <style jsx global>{`
    body {
        font-family:sans;
    }
    `}</style>
    </div>

}
