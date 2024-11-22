import './index.css'

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>
                {props.label}
            </label>

            <select 
                onChange={event => props.valueAlterado(event.target.value)}
                required={props.required} 
                value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;
