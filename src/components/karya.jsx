import React from "react";
import foto1 from "../images/karya/pemandangan.jpg";
import foto2 from "../images/karya/hujan.jpg";
import foto3 from "../images/karya/salju.jpg";

class Karya extends React.Component {
  render() {
    return (
      <div className="container grid grid-flow-col auto-rows-max grid-cols-3 place-items-center place-content-center p-4  bg-black w-full h-screen">
        <div name="card1" className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={foto1} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Musim Gugur</h2>
            <p>Musim gugur di Sawojajar akhir tahun</p>
            <div className="card-actions justify-end">
              <label htmlFor="my-modal-1" className="btn">
                Open
              </label>
              <input type="checkbox" id="my-modal-1" className="modal-toggle" />
              <label htmlFor="my-modal-1" className="modal cursor-pointer">
                <label className="modal-box w-full max-w-3xl max-h-xl rounded-lg relative" htmlFor="">
                  <img src={foto1}/>
                </label>
              </label>
            </div>
          </div>
        </div>
        <div name="card2" className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={foto2} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Musim Hujan</h2>
            <p>Musim Hujan di Sawojajar akhir tahun</p>
            <div className="card-actions justify-end">
              <label htmlFor="my-modal-2" className="btn">
                Open
              </label>
              <input type="checkbox" id="my-modal-2" className="modal-toggle" />
              <label htmlFor="my-modal-2" className="modal cursor-pointer">
                <label className="modal-box w-full max-w-3xl max-h-xl rounded-lg relative" htmlFor="">
                  <img src={foto2}/>
                </label>
              </label>
            </div>
          </div>
        </div>
        <div name="card3" className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img  src={foto3} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Musim Salju</h2>
            <p>Musim Salju di Sawojajar akhir tahun</p>
            <div className="card-actions justify-end">
              <label htmlFor="my-modal-3" className="btn">
                Open
              </label>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <label htmlFor="my-modal-3" className="modal cursor-pointer">
                <label className="modal-box w-full max-w-3xl max-h-xl rounded-lg relative" htmlFor="">
                  <img src={foto3}/>
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Karya;
