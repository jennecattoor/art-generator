const Select = ({label, value}) => {
    return (
        <label>
            <p>{label}</p>
            <select className="select" name="night">
                <option value="volvo">Cold night</option>
                <option value="saab">Warm summer night</option>
                <option value="fiat">Arctic night</option>
                <option value="audi">Desert night</option>
            </select>
        </label>
    )
}

export default Select