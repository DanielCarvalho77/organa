import './index.css'

const Colaborador = ({nome, imagem, cargo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                {/* <img src='://github.com/DanielCarvalho77.png' alt=''/> */}
                <img src={imagem} alt={`Imagem de ${nome}`}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;