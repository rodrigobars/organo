import './Time.css'

import Card from '../Card'
import hexToRgba from 'hex-to-rgba'

const Time = ( {time, colaboradores, aoDeletar, mudarCor, aoFavoritar} ) => {

    const css_bg_section = {backgroundColor: hexToRgba(time.cor, '0.6')}
    const css_bg_card = {backgroundColor: time.cor}

    return(
        (colaboradores.length > 0)
        ? 
        <section className="time" style={ css_bg_section }>
            <input
                onChange={event => mudarCor(event.target.value, time.id)}
                value={time.cor}
                type='color'
                className='input-cor'/>
            <h3 style={ {borderColor: time.cor} }>{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador, indice) => {
                    return(
                        <Card
                            key={indice}
                            colaborador={colaborador}
                            css_bg_card={css_bg_card}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
        :
        ''
    )
}

export default Time