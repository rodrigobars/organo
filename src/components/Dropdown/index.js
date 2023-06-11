import './Dropdown.css'

const Dropdown = (props) => {
 
    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} value={props.valor} required={props.obrigatorio}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>}
                )}
            </select>
        </div>
    )
}

export default Dropdown