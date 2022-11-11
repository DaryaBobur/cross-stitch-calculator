import { FormStyled } from "./FormStyled";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Form = ({ onSubmit }) => {
    
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
            
            <Box sx={{display: 'flex', alignItems: 'center'}}>
            <p>Розмір вишивки в хрестиках</p>
            <TextField 
            sx={{width: '60px', marginRight: '5px'}}
            variant="outlined" 
            type="text" 
            name="widthStitch" 
            onChange={handleChange} 
            value={widthStitch}
            size="small"
            required
            />
            x
            <TextField 
            sx={{width: '60px', marginLeft: '5px'}}
            variant="outlined" 
            type="text" 
            name="heightStitch" 
            onChange={handleChange} 
            value={heightStitch}
            size="small"
            required
            />
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
            <p>Відступ від краю(см)</p>
            <TextField 
            type="text" 
            sx={{width: '60px'}}
            name="marginStitch" 
            onChange={handleChange}
            value={marginStitch}
            size="small"
            required
            />
            </Box>
            <label>Розмір вишивки на канві
            <select name="size" value={size} onChange={handleChange} required>
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
       
            <Button type="submit" variant="contained">Розрахунок</Button>
        </FormStyled>

    )
}

export default Form;