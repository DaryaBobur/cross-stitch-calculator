import { FormStyled } from "./FormStyled";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';

const Form = ({ onSubmit }) => {
    
    const [widthStitch, setWidthStitch] = useState('');
    const [heightStitch, setHeightStitch] = useState('');
    const [marginStitch, setMarginStitch] = useState('');
    const [size, setSize] = useState('');
    const [amountYarn, setAmountYarn] = useState('')
  
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

          case 'amountYarn':
          setAmountYarn(value);
          break;

          default:
          return;

          }
      };

  
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ widthStitch, heightStitch, marginStitch, size, amountYarn });
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
            <label>Розмір вишивки в хрестиках:
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
            </label>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
            <label>Відступ від краю(см):
            <TextField 
            type="text" 
            sx={{width: '60px'}}
            name="marginStitch" 
            onChange={handleChange}
            value={marginStitch}
            size="small"
            required
            />
            </label>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
            <label>Через скільки ниток будемо вишивати:
            
            <NativeSelect 
            name="amountYarn" 
            value={amountYarn} 
            onChange={handleChange} 
            size="small" 
            sx={{width: '150px'}} 
            required>
                <option>Кількість ниток...</option>
                <option value="1">1 нитка</option>
                <option value="2">2 нитки</option>
            </NativeSelect>
            </label>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center'}}></Box>
            <label>Розмір вишивки на канві:
            <NativeSelect 
            name="size" 
            value={size} 
            onChange={handleChange} 
            size="small" 
            sx={{width: '150px'}} 
            required>
                <option>Оберіть канву...</option>

                <optgroup label="Канва">
                    <option value="14">14 каунт</option>
                    <option value="16">16 каунт</option>
                    <option value="18">18 каунт</option>
                    <option value="20">20 каунт</option>
                    <option value="22">22 каунт</option>
                </optgroup>

                <optgroup label="Канва рівномірного плетіння">
                    <option value="25">25 каунт</option>
                    <option value="27">27 каунт</option>
                    <option value="28">28 каунт</option>
                    <option value="30">30 каунт</option>
                    <option value="32">32 каунт</option>
                    <option value="36">36 каунт</option>
                    <option value="40">40 каунт</option>
                    <option value="46">46 каунт</option>
                    <option value="56">56 каунт</option>
                </optgroup>

            </NativeSelect>
            </label>
       
            <Button type="submit" variant="contained">Розрахунок</Button>
        </FormStyled>

    )
}

export default Form;