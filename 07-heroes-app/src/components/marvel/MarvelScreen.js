import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <div className="mb-3">
        <h1>Marvel Screen</h1>
        <hr />
        <HeroList publisher={'Marvel Comics'}/>
    </div>
  )
}
