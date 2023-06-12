import './TextField.css'

const TextField = ( {type="text", obrigatorio, valor, label, placeholder, aoAlterado} ) => {

    const aoDigitado = (event) => {
        aoAlterado(event.target.value)
    }

    return (
        <div className={`input-field field-${type}`}>
            <label>
                {label}
            </label>
            <input type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default TextField