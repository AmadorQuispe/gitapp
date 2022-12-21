import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

export const GitApp = () => {
    const [categories, setCategories] = useState(['Goku']);
    
    return (
        <>
            <h2>Git App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {categories.map(category => (
                    <GitGrid key={category} category={category} />
                ))}
            </ol>

        </>

    )
}
