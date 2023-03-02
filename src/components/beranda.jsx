import React from "react";
import Navbar from "./navbar";

class Beranda extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="flex items-center text-gray-100 justify-center h-screen font-bold text-7xl">
          rearn
          <div className="typing">
            <h1 className="font-mono text-2xl text-gray-100 md:text-2xl">
               <br className="block md:hidden" />
              <span className="relative">
                <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                  react learn
                </span>
                <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-black w-full animate-type will-change`}"></span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Beranda;
