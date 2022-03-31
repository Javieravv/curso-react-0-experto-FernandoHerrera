// Async / Await

const getImagen = async () => {

    try {
        const APIKEY = 'ERdEF2GWoOBR6jOo6wJyo8gw6U7gytbT';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`);
        const { data } = await respuesta.json ()
        const { url } = data.images.original
        const img = document.createElement ('img')
        img.src = url;
        document.body.append (img);
        console.log (data)
    } catch (error) {
        // maneo dle error.
    }

}

getImagen()

