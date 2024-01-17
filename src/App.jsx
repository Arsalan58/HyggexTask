import * as React from "react";
import "./index.css"
import Navbar from "./components/Navbar";
import Accordian from "./components/Accordian";

export default function App(props) {
  return (
    <div className="bg-stone-50 flex flex-col items-stretch pt-7 pb-12 px-16 max-md:px-5">
      <div className="flex flex-col mb-48 mx-11 max-md:max-w-full max-md:mr-2.5 max-md:mb-10">
        <Navbar />
        <div className="items-stretch flex gap-0 mt-16 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <span className="items-stretch flex gap-0">
            <img
              src="./src/assets/img/home.svg"
              className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              src="./src/assets/img/angle.svg"
              className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <div className="text-zinc-500 text-center text-lg font-medium self-center grow whitespace-nowrap my-auto">
              Flashcard
            </div>
          </span>
          <span className="self-center flex gap-0 my-auto items-start">
            <img
              src="./src/assets/img/angle.svg"
              className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
            />
            <div className="text-zinc-500 text-center text-lg font-medium">
              Mathematics
            </div>
            <span className="items-stretch self-stretch flex justify-between gap-0">
              <img
                src="./src/assets/img/angle.svg"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-blue-950 text-center text-lg font-semibold grow whitespace-nowrap self-start">
                Relation and Function
              </div>
            </span>
          </span>
        </div>
        <div style={{ background: "linear-gradient(180deg, #06286E 0%, #164EC0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} className="text-center text-3xl font-bold bg-clip-text self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          Relations and Functions ( Mathematics )
        </div>
        <div className="justify-between items-stretch self-center flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-blue-950 text-xl font-bold whitespace-nowrap items-stretch grow pb-3.5 px-3">
            <a href="#">Study</a>
          </div>
          <div className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch aspect-[2.3448275862068964] pb-3.5 px-3">
            <a href="#">Quiz</a>
          </div>
          <div className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch aspect-[2.2758620689655173] pb-3.5 px-3">
            <a href="#">Test</a>
          </div>
          <div className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch grow pb-3.5 px-3">
            <a href="#">Game</a>
          </div>
          <div className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch grow pb-3.5 px-3">
            <a href="#">Others</a>
          </div>
        </div>
        <div style={{ background: "linear-gradient(223deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)" }} className="self-center flex w-[712px] max-w-full flex-col items-stretch mt-8 px-9 py-11 rounded-[42.507px] max-md:px-5">
          <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <a href="#">
              <img
                src="./src/assets/img/bulb.svg"
                className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
              />
            </a>
            <a href="#">
              <img
                src="./src/assets/img/speaker.svg"
                className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
              />
            </a>
          </div>
          <div className="text-white text-center text-4xl font-bold tracking-wider self-center whitespace-nowrap mt-28 mb-24 max-md:my-10">
            9 + 6 + 7x - 2x - 3
          </div>
        </div>
        <div className="items-center self-center flex w-[612px] max-w-full justify-between gap-5 mt-8 max-md:flex-wrap">
          <a href="#">
            <img
              src="./src/assets/img/refresh.svg"
              className="aspect-square object-contain object-center w-[30px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </a>
          <div className="items-center flex justify-between gap-5">
            <a href="#">
              <img
                src="./src/assets/img/left.svg"
                className="aspect-square object-contain object-center w-[60px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-stretch shrink-0 max-w-full"
              /></a>
            <div className="text-gray-800 text-2xl font-bold my-auto">
              01/10
            </div>
            <a href="#">
              <img
                src="./src/assets/img/right.svg"
                className="aspect-square object-contain object-center w-[60px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </a>
          </div>
          <a href="#">
            <img
              src="./src/assets/img/max.svg"
              className="aspect-square object-contain object-center w-[30px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </a>
        </div>
        <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-20 px-0.5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <a href="#" className="items-stretch flex items-center justify-between gap-5">
            <div className="w-18 h-18 rounded-full overflow-hidden" style={{ boxShadow: "0px 0px 10px 0.3px #06286e" }}>
              <img className="aspect-square object-contain object-center w-[81px] overflow-hidden shrink-0 max-w-full" src="./src/assets/img/logo.svg"
                alt="Your Image" />
            </div>
            <div className="justify-center items-stretch flex grow basis-[0%] flex-col self-start">
              <div className="text-zinc-500 text-xs font-bold">
                Published by
              </div>
              <img
                src="./src/assets/img/logo2.svg"
                className="aspect-[3.38] object-contain object-center w-[115px] overflow-hidden self-center mt-3"
              />
            </div>
          </a>
          <div className="items-stretch self-center flex gap-2 my-auto">
            <a href="#">
              <img
                src="./src/assets/img/plus.svg"
                className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
              />
            </a>
            <div className="text-3xl font-semibold bg-clip-text self-center grow whitespace-nowrap my-auto">
              Create Flashcard
            </div>
          </div>
        </div>
        <div className="text-5xl font-bold tracking-wide bg-clip-text self-stretch mt-40 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          FAQ
        </div>
        <Accordian/>
      </div>
    </div>
  );
}

