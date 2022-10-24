import { HeroList } from "../components"

export const DcPage = () => {
    return (
      <>
          <h1>Héroes de Dc Comics</h1>
          <hr />
          <HeroList 
            publisher={'DC Comics'}
          />
      </>
    )
  }
  