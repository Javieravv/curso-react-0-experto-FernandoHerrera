export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=G8XXyw5Ry4K5hgOEQblyFDaNHzqxcSKO&q=${category}&limit=8`    

    const resp = await fetch ( url )
    const { data } = await resp.json()
    const gifs = data.map ( image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images.downsized_medium.url
        }
    })
    console.log ( gifs )
    return gifs
}