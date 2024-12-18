import Colaborador from '../Colaborador'
import './index.css'

const Time = (props) => {

    const sectionCss = {
        backgroundColor: props.corSecundaria
    }

    const h3Css = {
        borderColor: props.corPrimaria
    }

    return (

        (props.colaboradores.length > 0 ) ?
        
        <section className='time' style={sectionCss}>
            <h3 style={h3Css}>{props.nome}</h3>

            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                <Colaborador nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}/>)}
            </div>

        </section>
        : ''
    )
}

export default Time;