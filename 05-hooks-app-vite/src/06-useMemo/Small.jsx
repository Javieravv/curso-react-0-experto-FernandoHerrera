import { memo } from 'react'

export const Small = memo(( { value }) => {
    console.log ('Me estoy dibujando..')
    return (
        <small> { value } </small>
    )
})
