import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getDetails = async function () {
    let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  };
  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <>
      <h2 className="text-center">This is Product Details Page</h2>

      <div className="row">
        <div className="col-sm-4 offset-4">
          <div className="card">
            <img
              src={product?.image}
              className="card-img-top"
              alt="aa"
              width="200"
              height="150"
            />
            <div className="card-body text-center">
              <h5 className="card-title">{product?.category}</h5>
              <p className="card-text">{product?.title}</p>
              <p className="card-text">{product?.price}</p>
              <p className="card-text">{product?.rating?.rate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
