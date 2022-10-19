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

    // Eliminar una categoría
    const onDeleteCategory = ( category ) => {
        alert (`Vamos a eliminar la cateogoría ${category.toUpperCase()}`)
        const arrCategories = categories.filter ( cat => cat != category)
        setCategories ( arrCategories )        
        console.log ( 'NUEVAS CATEGORIAS...', categories)
    }

    return  (
        <>
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
                            removeCategory = { onDeleteCategory }
                        />
                    ))
                }
            </div>
        </>

    )
}

