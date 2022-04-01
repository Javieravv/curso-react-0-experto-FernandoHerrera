// Emn este componente se recibe la categoría y se hace una petición
// http
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ( {category} ) => {
    // key = 'ERdEF2GWoOBR6jOo6wJyo8gw6U7gytbT'
    // usamos un custom hook para traer las imágenes.
    const { data:images, loading } = useFetchGifs( category )
    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Cargando Imágenes...</p>}
            <div className="card-grid">
            {
                images.map ( img => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }
                    />
                ))
            }
            </div> 
        </>
    )
}
