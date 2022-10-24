import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
        <h1>Héroes de Marvel</h1>
        <HeroList 
            publisher={'Marvel Comics'}
          />
    </>
  )
}
