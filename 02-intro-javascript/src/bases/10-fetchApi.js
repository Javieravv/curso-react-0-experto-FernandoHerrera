// Fetch API from

// uSAMOS esta API: https://developers.giphy.com/dashboard/

const APIKEY = 'ERdEF2GWoOBR6jOo6wJyo8gw6U7gytbT';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`);

// Aquí vemos promesas encadenadas.

peticion
    .then ( resp => resp.json() )
    // De la data extraemos lo que nos interese y deberá tenerse en cuenta cómo
    // viene de la API.
    .then ( ({ data }) => {
        const { url } = data.images.original
        const img = document.createElement ('img')
        img.src = url;
        document.body.append (img);
    } )
    .catch (console.error)
