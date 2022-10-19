// Realizar petición Http para retornar la información del API
// import { gifImages } from "../helpers/images"
import { useState } from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"


export const GifGrid = ( { category, removeCategory }) => {
    // hook personalizado para cargar imágenes
    const { images, isLoading } = useFetchGifs ( category )
    const [verGifts, setVerGifts] = useState(true)

    return (
        <>
        {
            isLoading && ( <h2>Cargando...</h2>)
        }
            <div>
                <div className = {"title-card"}>
                    <h3>{ category }</h3>
                    <div>
                        <img 
                            src="/assets/delete-svgrepo-com.svg" 
                            className="imgGif"
                            onClick = { () => removeCategory ( category ) }
                        />
                        <img 
                            src="/assets/arrow-up-svgrepo-com.svg" 
                            className={ verGifts ? "imgGif imgGifRotate0" : "imgGif imgGifRotate180"}
                            onClick = { () => setVerGifts (!verGifts)}
                        />
                    </div>
                </div>
                <div className={ verGifts ? "card-grid ver-card-grid" : "card-grid ocultar-card-grid"}>
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
