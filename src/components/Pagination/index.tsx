import React from "react"

const Pagination = ({
  beersPerPage,
  totalBeers,
  selectPage,
  activePage,
}: any) => {
  const pageNums = []

  for (let i = 1; i < Math.ceil(totalBeers / beersPerPage); i++) {
    pageNums.push(i)
  }

  return (
    <div className="pb-10">
      <ul className="flex gap-4">
        {pageNums.map((pgNum: number) => (
          <li
            onClick={() => selectPage(pgNum)}
            className={activePage === pgNum ? "active-page" : "incative-page"}
            key={pgNum}
          >
            {pgNum}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
