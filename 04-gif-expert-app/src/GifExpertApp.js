import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {
    const [categories, setCategories] = useState([])    

    return (
        <>
            <h2 className="animate__animated animate__rubberBand animate__delay-2s ">GifExpert App</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />
            
            <div>
                {
                    categories.map ( category => (
                        <GifGrid 
                            key={category}
                            category = {category}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifExpertApp

