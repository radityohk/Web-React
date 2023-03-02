import React from "react";
import foto1 from "../images/karya/tengkorak.jpg";

class TentangSaya extends React.Component {
  render() {
    return (
      <div className="container bg-black w-full h-screen">
        <div className="avatar flex items-center justify-center h-1/2 ">
          <div className="w-48 rounded-full">
            <img src={foto1} />
          </div>
        </div>
        <div className="text-white grid place-items-center text-center  mt-4 text-xl">
            <h3>Dinosaurus</h3>
            <p>Hewan keren yang punya muka serem tapi lucu</p>
            <p>Kalo mau adopt pm nomer di tab Kontak</p>
          </div>
      </div>
    );
  }
}

export default TentangSaya;
