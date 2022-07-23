import Image from "next/image"
import React from "react"

export const getStaticPaths = async () => {
  const res = await fetch("https://api.punkapi.com/v2/beers")
  const data = await res.json()

  const paths = data.map((beer: any) => {
    return {
      params: { id: beer.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const res = await fetch("https://api.punkapi.com/v2/beers/" + id)
  const data = await res.json()

  return {
    props: { beer: data[0] },
  }
}

const BeerDetails = ({ beer }: any) => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-[4rem] leading-normal font-extrabold text-gray-700 mb-4">
        {" "}
        {beer.name}
      </h1>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <Image
          alt={beer.name}
          width="200px"
          height="300px"
          layout="fixed"
          src={beer.image_url}
        />
        <h2 className="text-[1.5rem] md:text-[2rem] font-extrabold text-gray-500">
          {beer.tagline}
        </h2>
        <p className="text-center">{beer.description}</p>
        <p>Аlcohol by Volume - {beer.abv}</p>
        <h3 className="text-[1.2rem] leading-normal font-extrabold text-gray-500">
          Pairings:
        </h3>
        <ul className="flex flex-col items-center">
          {beer.food_pairing.map((pairing: string, index: any) => (
            <li key={index}>{pairing}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BeerDetails
