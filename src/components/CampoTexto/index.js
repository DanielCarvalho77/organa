import './CampoTexto.css'

const CampoTexto = (props) => {


    const aoDigitado = ( event ) =>{
        props.valueAlterado(event.target.value)
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
                value={props.valor}
                onChange={aoDigitado}
                >
            </input>

        </div>
    )
}

export default CampoTexto;
