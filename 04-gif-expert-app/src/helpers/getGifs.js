// Creamos un helper

// Esta función regresa una promesa.
export const getGifs =  async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=ERdEF2GWoOBR6jOo6wJyo8gw6U7gytbT&limit=5`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map (  img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}