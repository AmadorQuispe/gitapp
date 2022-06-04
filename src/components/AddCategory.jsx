import React, { useState } from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
      setInputValue(e.target.value);  
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cats => [inputValue,...cats]);
        }
        setInputValue('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
            className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects...'
            name='add'
            type='text'
            onChange={handleInputChange}
            value={inputValue}
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}