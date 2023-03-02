import React from "react";
import foto1 from "../images/karya/boneka.jpg";
import foto2 from "../images/karya/tengkorak.jpg";
import foto3 from "../images/karya/kecik.jpg";

class Kontak extends React.Component {
  render() {
    return (
      <div className="container bg-black w-full h-screen">
        <div className="flex flex-col justify-center px-80 h-full">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={foto1} />
              </div>
            </div>
            <div className="chat-bubble chat-bubble-primary">
              bagi nomor wa dong bang
            </div>
          </div>
          <div className="chat chat-end">
          <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={foto2} />
              </div>
            </div>
            <div className="chat-bubble chat-bubble-secondary">
              oke, 085704660645
            </div>
          </div>
          <div className="chat chat-start">
          <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={foto3} />
              </div>
            </div>
            <div className="chat-bubble chat-bubble-primary">
              kalo ig apa bang
            </div>
          </div>
          <div className="chat chat-end">
          <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={foto2} />
              </div>
            </div>
            <div className="chat-bubble chat-bubble-secondary">@radityohk</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Kontak;
