export default class extends React.Component {
    render = () => <div><h1>Hola Consorcio!</h1>
    <p>Bienvenido al curos de next.js</p>

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
        background-color: yellow;
    }
    `}</style>
    </div>

}
