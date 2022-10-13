// Realizar petición Http para retornar la información del API
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ( { category }) => {
    // hook personalizado para cargar imágenes
    const { images, isLoading } = useFetchGifs ( category )

    return (
        <>
        {
            isLoading && ( <h2>Cargando...</h2>)
        }
            <div>
                <div className = "title-card">
                    <h3>{ category }</h3>
                    <button
                        className = "btnEliminar"
                    >
                        Eliminar
                    </button>
                </div>
                <div className="card-grid">
                    {
                        images.map ((image) => (
                            <GifItem 
                                key = { image.id } 
                                {...image}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
