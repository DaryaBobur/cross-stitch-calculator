import { FormStyled } from "./FormStyled";
import { useState } from "react";

const Form = ({onSubmit}) => {
    
    const [widthStitch, setWidthStitch] = useState('');
    const [heightStitch, setHeightStitch] = useState('');
    const [marginStitch, setMarginStitch] = useState('');
    const [size, setSize] = useState('');
  
    const handleChange = evt => {
        console.log(evt.target.value)
      const { name, value } = evt.currentTarget;
  
        switch(name) {
          case 'widthStitch':
          setWidthStitch(value);
          break;
  
          case 'heightStitch':
          setHeightStitch(value);
          break;
          
          case 'marginStitch':
          setMarginStitch(value);
          break;
  
          case 'size':
          setSize(value);
          break;
          default:
          return;
          }
      };

  
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ widthStitch, heightStitch, marginStitch, size });

        resetForm();
    };


  
    const resetForm = () => {
        setWidthStitch('');
        setHeightStitch('');
        setMarginStitch('');
        setSize('');
    }


    return (

        <FormStyled autocomplete="off" onSubmit={handleSubmit}>
            <label>Розмір вишивки в хрестиках
                <input 
                    type="number" 
                    name="widthStitch" 
                    onChange={handleChange} 
                    value={widthStitch}
                    required
                />
                x
                <input 
                    type="number" 
                    name="heightStitch" 
                    onChange={handleChange} 
                    value={heightStitch}
                    required
                />
            </label>
            
            <label>Відступ від краю(см)
                <input type="number" 
                name="marginStitch" 
                onChange={handleChange}
                value={marginStitch}
                required
                />
            </label>

            <label>Розмір вишивки на канві
            <select name="size" value={size} onChange={handleChange} >
                <option>Оберіть канву...</option>
                    <optgroup label="Канва">
                    <option value="14">14 каунт</option>
                    <option value="16">16 каунт</option>
                    <option value="18">18 каунт</option>
                    <option value="20">20 каунт</option>
                    <option value="22">22 каунт</option>
                </optgroup>

                <optgroup label="Канва рівномірного плетіння через 1 нитку">
                    <option value="25">25 каунт(через 1 нитку)</option>
                    <option value="27">27 каунт(через 1 нитку)</option>
                    <option value="28">28 каунт(через 1 нитку)</option>
                    <option value="30">30 каунт(через 1 нитку)</option>
                    <option value="32">32 каунт(через 1 нитку)</option>
                    <option value="36">36 каунт(через 1 нитку)</option>
                    <option value="40">40 каунт(через 1 нитку)</option>
                    <option value="46">46 каунт(через 1 нитку)</option>
                    <option value="56">56 каунт(через 1 нитку)</option>
                </optgroup>
                
                <optgroup label="Канва рівномірного плетіння через 2 нитки">
                    <option value="25">25 каунт(через 2 нитки)</option>
                    <option value="27">27 каунт(через 2 нитки)</option>
                    <option value="28">28 каунт(через 2 нитки)</option>
                    <option value="30">30 каунт(через 2 нитки)</option>
                    <option value="32">32 каунт(через 2 нитки)</option>
                    <option value="36">36 каунт(через 2 нитки)</option>
                    <option value="40">40 каунт(через 2 нитки)</option>
                    <option value="46">46 каунт(через 2 нитки)</option>
                    <option value="56">56 каунт(через 2 нитки)</option>
                    </optgroup>

            </select>
            </label>
            <button type="submit">Розрахунок</button>
        </FormStyled>

    )
}

export default Form;