import { useState } from "react"
import ButtonSubmit from "../ButtonSubmit"
import Dropdown from "../Dropdown"
import TextField from "../TextField"

import './Formulario.css'

const Formulario = ( {aoColaboradorCadastrado, times, cadastrarTime} ) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField
                    obrigatorio
                    label="Cargo"
                    placeholder="Digite o seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField
                    obrigatorio
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <Dropdown
                    obrigatorio
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <ButtonSubmit text='Criar Card'/>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault();
                cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <TextField 
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <TextField
                    type='color'
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <ButtonSubmit text='Criar Card'/>
            </form>
        </section>
    )
}

export default Formulario