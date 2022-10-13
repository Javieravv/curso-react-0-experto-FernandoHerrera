/**Componente principal */

import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState ([])

    const onAddCategories = (newCategory) => {
        // Evitar insertar repetidos 
        if ( categories.includes(newCategory) ) return
        setCategories (
            [newCategory, ...categories ]
        )
    }

    return  (
        <>
            <h1>Gift Expert App</h1>
            <AddCategory 
                //setCategories = { setCategories }
                onNewCategory = { onAddCategories }
            />
            <div>
                {
                    categories.map ( (category) => (
                        <GifGrid 
                            category = { category }
                            key = { category  } 
                        />
                    ))
                }
            </div>
        </>

    )
}

