const Select = ({label, value}) => {
    return (
        <label>
            <p>{label}</p>
            <select className="select" name="night">
                {value.map(mood => <option key={mood.name} value={mood.name}>{mood.name}</option>)}
            </select>
        </label>
    )
}

export default Select