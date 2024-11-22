import './CampoTexto.css'

const CampoTexto = (props) => {

    let valor = ''

    const aoDigitado = ( event) =>{
        valor = event.target.value;
    }

    return (
        <div className="campo-texto">

            <label>
                {props.label}
            </label>

            <input 
                placeholder={props.placeholder} 
                type={props.type}
                required={props.required}
                value={valor}
                onChange={aoDigitado}
                >
            </input>

        </div>
    )
}

export default CampoTexto;