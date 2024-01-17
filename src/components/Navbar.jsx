import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="self-stretch flex w-full items-center justify-between gap-5 px-0.5 max-md:max-w-full max-md:flex-wrap">
                    <img
                        src="./src/assets/img/navbar.svg"
                        alt="img"
                        className="aspect-[4.9] object-contain object-center w-[191px] overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <span className="items-stretch self-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                        <a href="#" className="text-neutral-700 text-lg self-center my-auto">Home</a>
                        <a href="#" className="text-neutral-700 text-lg self-center my-auto">Flashcard</a>
                        <a href="#" className="text-neutral-700 text-lg self-center my-auto">Contact</a>
                        <a href='#' className="text-neutral-700 text-lg self-center my-auto">
                            FAQ
                        </a>
                        <a href="#" className="text-white text-lg font-medium whitespace-nowrap justify-center items-stretch  py-3.5 rounded-[32px] max-md:px-5">
                            <button className="rounded-full bg-midnight py-1 px-8" style={{ background: "linear-gradient(180deg, #06286E 0%, #164EC0 100%)" }}>Login</button>
                        </a>
                    </span>
                </div>
            </nav>
        </>

    )
}
