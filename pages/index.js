export default class extends React.Component {
    render = () => <div><h1>Hola Consorcio!</h1>
    <p>Bienvenido al curos de next.js</p>
    <img
    src="/logo-movie.png"
    alt="Logo"/>

    <style jsx>{`
    h1 {
        color: red;
    }
    div :global(p){
      color: green;
    }
    `}</style>
    <style jsx global>{`
    body {
        background-color: white;
    }
    `}</style>
    </div>

}
