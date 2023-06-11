import './Time.css'

import Card from '../Card'

const Time = ( {nome, corPrimaria, corSecundaria, colaboradores} ) => {

    const css_bg_section = {backgroundColor: corSecundaria}
    const css_bg_card = {backgroundColor: corPrimaria}

    return(
        (colaboradores.length > 0)
        ? 
        <section className="time" style={ css_bg_section }>
            <h3 style={ {borderColor: corPrimaria} }>{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => 
                    <Card
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        time={colaborador.time}
                        imagem={colaborador.imagem}
                        css_bg_card={css_bg_card}/>
                )}
            </div>
        </section>
        :
        ''
    )
}

export default Time