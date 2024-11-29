import { useState } from 'react';
import Button from '../Button';
import CampoTexto from '../CampoTexto';
import Dropdown from '../Dropdown';
import './index.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const save = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={save}>
                <h2>Prencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite seu nome"  
                    required={true} type="text"
                    valor={nome}
                    valueAlterado={valor => setNome(valor)}
                    />

                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    required={true} type="text"
                    valor={cargo}
                    valueAlterado={valor => setCargo(valor)}
                    />

                <CampoTexto 
                    label="Imagem"  
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    valueAlterado={valor => setImagem(valor)}
                    />

                <Dropdown 
                    label="Time" 
                    required={true} 
                    itens={props.nomeDosTimes}
                    valor={time}
                    valueAlterado={valor => setTime(valor)}
                    />

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Formulario;