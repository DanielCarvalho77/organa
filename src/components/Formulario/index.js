import Button from '../Button';
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

    const save = (event) => {
        event.preventDefault()
        console.log('saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalva');
        alert('CATAPIMBAS MEU')
    }

    return (
        <section className="formulario">
            <form onSubmit={save}>
                <h2>Prencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" required={true} type="text"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" required={true} type="text"/>
                <CampoTexto label="Imagem"  placeholder="Digite o endereço da imagem"/>
                <Dropdown label="Time" required={true} itens={times}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Formulario;