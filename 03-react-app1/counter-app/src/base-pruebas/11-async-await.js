

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {

        const apiKey = 'ERdEF2GWoOBR6jOo6wJyo8gw6U7gytbT';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
    }
}

 getImagen();



