import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter()

  // useEffect(() => {
  setTimeout(() => {
    router.push("/")
  }, 3000)
  // }, [])

  return (
    <div className="container mx-auto flex flex-col items-center justify-start h-screen p-4 pb-10">
      <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
        Ooops...
      </h1>
      <h2 className="text-lg md:text-[2rem] leading-normal font-extrabold text-gray-500">
        That page cannot be found :P
      </h2>
      <p>
        Going back to the
        <Link href="/">
          <a className=" text-gray-500 text-2xl hover:text-yellow-500">
            {" "}
            Homepage{" "}
          </a>
        </Link>
        in 3 seconds...
      </p>
    </div>
  )
}

export default NotFound
