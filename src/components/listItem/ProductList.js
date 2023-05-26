import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import products from "./products.json";

export default function ProductList() {
  const [selectedProduct,setSelectedProduct] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const handleShow = (product) => {
    setSelectedProduct({...product})
    setShow(true);
  }

  return (
    <>
      <h2 className="text-center">Product List</h2>

      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-sm-3" key={product.id}>
                <div className="card">
                  <img src={product.image} className="card-img-top" alt="aa" width='200' height='150' />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.category}</h5>
                    <p className="card-text">{product.title}</p>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text">{product.rating.rate}</p>
                    <a href="#" className="btn btn-primary" onClick={()=>{handleShow(product)}}>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <div className="card">
                  <img src={selectedProduct.image} className="card-img-top" alt="aa" width='200' height='150' />
                  <div className="card-body text-center">
                    <h5 className="card-title">{selectedProduct.category}</h5>
                    <p className="card-text">{selectedProduct.title}</p>
                    <p className="card-text">{selectedProduct.price}</p>
                  </div>
                </div>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
    </Modal>
    </>
  );
}
