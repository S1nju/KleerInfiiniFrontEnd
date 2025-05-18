import React from "react"

export default function PaginationPrimaryHelperText() {
  return (
    <>
      {/*<!-- Component: Primary pagination with helper text --> */}
      <nav
        role="navigation"
        aria-label="Pagination Navigation"
        className="flex w-full flex-col items-center gap-2 md:flex-row"
      >
        <p className="flex-1 text-center text-sm text-slate-500 md:text-left">
          Showing 31 to 40 of 57 results
        </p>
        <ul className="flex list-none items-center justify-center text-sm text-slate-700 md:gap-1">
          <li>
            <a
              href="javascript:void(0)"
              aria-label="Goto Page 1"
              className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none"
            >
              <span className="order-2 md:sr-only">Prev</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-mx-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-07 desc-07"
              >
                <title id="title-07">Previous page</title>
                <desc id="desc-07">link to previous page</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="javascript:void(0)"
              aria-label="Goto Page 1"
              className="hidden h-10 items-center justify-center rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              aria-label="Goto Page 2"
              className="hidden h-10 items-center justify-center rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="hidden h-10 items-center justify-center whitespace-nowrap rounded bg-blue-500 px-4 text-sm font-medium text-white ring-offset-2 transition duration-300 hover:bg-blue-600 hover:stroke-blue-500 focus:bg-blue-700 focus-visible:outline-none md:inline-flex"
              aria-label="Current Page, Page 3"
              aria-current="true"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              aria-label="Goto Page 4"
              className="hidden h-10 items-center justify-center rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              aria-label="Goto Page 5"
              className="hidden h-10 items-center justify-center rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              aria-label="Goto Page 4"
              className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none"
            >
              <span className="md:sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-mx-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-08 desc-08"
              >
                <title id="title-08">Next</title>
                <desc id="desc-08">link to next page</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      {/*<!-- End Primary pagination with helper text --> */}
    </>
  )
}
