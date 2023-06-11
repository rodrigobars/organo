import './Card.css'

const Card = ( {nome, cargo, imagem, css_bg_card} ) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={css_bg_card}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Card