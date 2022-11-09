
const Form = () => {

    return (
        <form autocomplete="off" >
            <label>Довжина
                <input type="number" name="number" />
            </label>
            
            <label>Висота
                <input type="number" name="number"/>
            </label>
            
            <label>Кількість сантиметрів відступу
                <input type="number" name="number"/>
            </label>

            <label>Оберіть тип канви
            <select id="size" name="size">
            <option value="xs">Extra Small</option>
            <option value="s">Small</option>
            <option value="m" selected>Medium</option>
            <option value="l">Large</option>
            </select>
            </label>
            <button type="submit">Розрахунок</button>
        </form>
    )
}

export default Form;