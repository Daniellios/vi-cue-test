import React from "react"
import BeerCard from "../BeerCard"

const BeerList = ({ beerList, loading }: any) => {
  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3 pb-10">
      {beerList ? (
        beerList.map((beer: any, index: number) => (
          <BeerCard
            key={index}
            link={`/beer/` + beer.id}
            img={beer?.image_url}
            beerName={beer?.name}
            description={beer?.description}
          />
        ))
      ) : (
        <h1>No Bear Today</h1>
      )}
    </div>
  )
}

export default BeerList
