import React from "react";
import { Link } from "react-router-dom";
import Utama from "./utama";


const navbar = () => {
  return (
    <div className="container bg-black">
      <div className="navbar bg-teal-900">
        <div className="navbar-start">
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal rounded-full font-mont font-bold text-md text-white">
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/karya">Karya</Link>
            </li>
            <li>
              <Link to="/kontak">Kontak</Link>
            </li>
            <li>
              <Link to="/tentangsaya">Tentang</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        </div>
      </div>
      <div className="body">
        <Utama/>
      </div>
    </div>
  );
};

export default navbar;