import React from "react";
import Bgtext from "./assets/TextBg.jpeg";
import TruckBg from "./assets/TruckBg.jpeg";
import Footer from "../Reusable Components/Footer";

export default function MainLandingPage() {
  return (
    <div>
      <div
        className="h-[50vh] bg-cover bg-center p-5"
        style={{ backgroundImage: `url(${Bgtext})` }}>
        <div className="flex justify-around">
          <p className="font-bold text-9xl">Transport</p>
          <div className="text-right mt-3">
            <p>They play crucial role in ensuring efficiency,</p>
            <p>reliabilty and sustainabilty of supply chains</p>
            <p>across various industries.</p>
            <button className="bg-yellow-300 font-bold mt-3 p-1 rounded border-black border">Explore more--</button>
          </div>
        </div>
        <div className="flex justify-around mt-10 ">
          <div className="text-left mt-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur </p>
            <p>Lorem ipsum dolor sit, </p>
            <div className="flex gap-3 mt-3">
              <button className="bg-white border-black border px-2 py-1 font-bold rounded">←</button>
              <button className="bg-black text-white px-2 py-1 font-bold rounded">→</button>

            </div>
          </div>
          <p className="font-bold text-9xl">& Logistics</p>
        </div>
      </div>
      <div
        className="h-[70vh] bg-cover bg-center p-5 bg-fixed"
        style={{ backgroundImage: `url(${TruckBg})` }}>
      </div>
      <Footer />
    </div>
  );
}