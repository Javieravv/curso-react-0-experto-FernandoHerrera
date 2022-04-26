/** Nos ayuda a subir un archivo a un backend.
 * 
 */

export const fileUpload = async ( file ) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/react-journal/upload'
    const formData = new FormData()
    formData.append ('upload_preset', 'react-journal')
    formData.append ('file', file)

    try {
        // En resp tendremos todo lo que el backend clouddinary responda
        const resp = await fetch (cloudUrl, { 
            method: 'POST',
            body: formData
        })

        if ( resp.ok ) {
            const cloudResp = await resp.json()
            return cloudResp.secure_url
        } else {
            throw await resp.json ()
        }
    } catch (error) {
        throw error
    }

    // return el url de la imagen ya subida
}

