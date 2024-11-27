import './index.css'

const Time = (props) => {

    const sectionCss = {
        backgroundColor: props.corSecundaria
    }

    const h3Css = {
        borderColor: props.corPrimaria
    }

    return (
        <section className='time' style={sectionCss}>
            <h3 style={h3Css}>{props.nome}</h3>
        </section>
    )
}

export default Time;