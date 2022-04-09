import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
  return (
    <div className="mb-3">
        <h1>DC Screen</h1>
        <hr />
        <HeroList publisher={'DC Comics'}/>
    </div>
  )
}

