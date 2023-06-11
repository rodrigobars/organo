import './TextField.css'

const TextField = (props) => {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField