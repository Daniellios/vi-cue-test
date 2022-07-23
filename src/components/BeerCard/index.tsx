import Image from "next/image"
import Link from "next/link"

const BeerCard = ({
  link,
  img,
  beerName,
  tagline,
  description,
}: IBeerProps) => {
  const limitText = (text: any) => {
    const max_chars = 140

    if (text.length > max_chars) {
      text = text.substr(0, max_chars)
    }
    return text + "..."
  }

  return (
    <Link href={link}>
      <div className="flex flex-col justify-center items-center p-6 gap-4 duration-300 border-2 border-gray-500 rounded shadow-xl hover:border-yellow-500 hover:cursor-pointer">
        <Image
          alt={beerName}
          src={img}
          width="150px"
          height="200px"
          layout="fixed"
        ></Image>
        <h2 className="text-lg text-gray-700">{beerName}</h2>
        <p className="text-sm text-gray-600">{limitText(description)}</p>
        <p>{tagline}</p>
      </div>
    </Link>
  )
}

export default BeerCard

interface IBeerProps {
  link: string
  img?: any
  beerName?: string
  tagline?: string
  description?: string
}
