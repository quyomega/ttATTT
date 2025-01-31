import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MaHoaCaesar from "./components/MaHoaCaesar";
import MaHoaThayThe from "./components/MaHoaThayThe";
import MaHoaHoanVi from "./components/MaHoaHoanVi";
import MaHoaVigenere from "./components/MaHoaVigenere";
import MaHoaAffine from "./components/MaHoaAffine";
import MaHoaHill from "./components/MaHoaHill";
import MaHoaPlayFair from "./components/MaHoaPlayFair";
import MaHoaRSA from "./components/MaHoaRSA";
import MaHoaDH from "./components/MaHoaDH";
import './styles.css';

function App() {
  const [showModal, setShowModal] = useState(false); 

  const showMessage = () => {
    setShowModal(true); 
  };

  const handleClose = () => {
    setShowModal(false); 
  };
  return (
    <Router>
      <div className="container mt-5">
        <h1  className="text-center" >Hệ Thống Mã Hóa</h1>
        <nav className="text-center mb-4">
          <div className="row mt-2 justify-content-center">
            <div className="col-md-2">
              <Link to="/mahoacaesar" className="btn btn-primary w-100">
                Bài 1: Mã Hóa Caesar
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/mahoathaythe" className="btn btn-primary w-100">
                Bài 2: Mã Hóa Thay Thế
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/mahoahoanvi" className="btn btn-primary w-100">
                Bài 3: Mã Hóa Hoán Vị
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/mahoavigenere" className="btn btn-primary w-100">
                Bài 4: Mã Hóa Vigenere
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/mahoaaffine" className="btn btn-primary w-100">
                Bài 5: Mã Hóa Affine
              </Link>
            </div>
          </div>
          <div className="row mt-2 justify-content-center">
            <div className="col-md-2">
              <Link to="/mahoahill" className="btn btn-primary w-100">
                Bài 6: Mã Hóa <br></br>Hill
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/mahoaplayfair" className="btn btn-primary w-100">
                Bài 7: Mã Hóa PlayFair
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/mahoarsa" className="btn btn-primary w-100">
                Bài 8: Mã Hóa <br></br>RSA
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/mahoadh" className="btn btn-primary w-100">
                Bài 9: Mã Hóa Diffie Hellman
              </Link>
            </div>
            <div className="col-md-2">
              <button onClick={showMessage} className="btn btn-primary w-100">
                Ấn vào và ....................
              </button>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/mahoacaesar" element={<MaHoaCaesar />} />
          <Route path="/mahoathaythe" element={<MaHoaThayThe />} />
          <Route path="/mahoahoanvi" element={<MaHoaHoanVi />} />
          <Route path="/mahoavigenere" element={<MaHoaVigenere />} />
          <Route path="/mahoaaffine" element={<MaHoaAffine />} />
          <Route path="/mahoahill" element={<MaHoaHill />} />
          <Route path="/mahoaplayfair" element={<MaHoaPlayFair />} />
          <Route path="/mahoarsa" element={<MaHoaRSA />} />
          <Route path="/mahoadh" element={<MaHoaDH />} />
        </Routes>

        <div className={`modal-overlay ${showModal ? "active" : ""}`}></div> 
        
        <div className={`modal fade ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none" }} aria-hidden={!showModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Nhóm 4</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <p>Cảm ơn cô và các bạn đã theo dõi !!!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success w-100" onClick={handleClose}>Đóng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
