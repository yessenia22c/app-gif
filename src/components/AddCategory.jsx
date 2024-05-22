import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
        
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        //setCategories( categories => [...categories, inputValue]);
        onNewCategory(inputValue);
        setInputValue('');
    }
  return (
    
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar Gif"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
    
  )
}
