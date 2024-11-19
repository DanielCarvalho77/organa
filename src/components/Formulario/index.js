import CampoTexto from '../CampoTexto';
import Dropdown from '../Dropdown';
import './index.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Prencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" type="text"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" type="text"/>
                <CampoTexto label="Imagem"  placeholder="Digite o endereço da imagem"/>
                <Dropdown label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario;