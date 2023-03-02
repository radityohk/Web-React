import React from "react";
import foto1 from "../images/stock/foto.jpg";

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
            <h4>Radityo Handri Kurniawan</h4>
            <p>Saya siswa SMK Telkom Malang kelas XI jurusan RPL <br />
            Back-end Developer</p>
          </div>
      </div>
    );
  }
}

export default TentangSaya;
