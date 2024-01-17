import React from 'react'

export default function Accordian() {
    return (
        <>
           {/* Accordion Item 1*/}
          <div className="bg-white rounded-xl  overflow-hidden shadow">
            <input type="checkbox" id="accordion-item-1" className="hidden" onClick={(e) => {
              setDisplay({ ...display, acc1: e.target.checked })

            }} />
            <label htmlFor="accordion-item-1" className="block p-4 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                  Can education flashcards be used for all age groups?
                </div>
                <svg
                  className="w-6 h-6 transition-transform duration-300 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </label>
            <div id="acc1" style={{ height: display.acc1 ? document.getElementById("acc1").scrollHeight + "px" : '0', transition: "all linear 0.2s" }} className="transition-max-height duration-300 ease-in-out overflow-hidden ">
              <ul className="p-4">
                <li>Sub-item X</li>
                <li>Sub-item Y</li>
                <li>Sub-item Z</li>
              </ul>
            </div>
          </div>

        </div>
        <span className="border  w-[848px] max-w-full gap-5 mt-8 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap ">
          {/* Accordion Item 2*/}
          <div className="bg-white rounded-xl  overflow-hidden shadow">
            <input type="checkbox" id="accordion-item-2" className="hidden" onClick={(e) => {
              setDisplay({ ...display, acc2: e.target.checked })

            }} />
            <label htmlFor="accordion-item-2" className="block p-4 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                  How do education flashcards work?
                </div>
                <svg
                  className="w-6 h-6 transition-transform duration-300 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </label>
            <div id="acc2" style={{ height: display.acc2 ? document.getElementById("acc2").scrollHeight + "px" : '0', transition: "all linear 0.2s" }} className="transition-max-height duration-300 ease-in-out overflow-hidden ">
              <ul className="p-4">
                <li>Sub-item X</li>
                <li>Sub-item Y</li>
                <li>Sub-item Z</li>
              </ul>
            </div>
          </div>

        </span>
        <div className="border  w-[848px] max-w-full gap-5 mt-8 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap ">
          {/* Accordion Item 3 */}
          <div className="bg-white rounded-xl  overflow-hidden shadow">
            <input type="checkbox" id="accordion-item-3" className="hidden" onClick={(e) => {
              setDisplay({ ...display, acc3: e.target.checked })

            }} />
            <label htmlFor="accordion-item-3" className="block p-4 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
                  Can education flashcards be used for test preparation?
                </div>
                <svg
                  className="w-6 h-6 transition-transform duration-300 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </label>
            <div id="acc3" style={{ height: display.acc3 ? document.getElementById("acc3").scrollHeight + "px" : '0', transition: "all linear 0.2s" }} className="transition-max-height duration-300 ease-in-out overflow-hidden ">
              <ul className="p-4">
                <li>Sub-item X</li>
                <li>Sub-item Y</li>
                <li>Sub-item Z</li>
              </ul>
            </div>
          </div>
        </>

    )
}
