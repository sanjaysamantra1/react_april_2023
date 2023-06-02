import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductDetails2() {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setProduct(currentParams);
    console.log(currentParams); // get new values onchange
  }, [searchParams]);

  return (
    <>
      <h2 className="text-center">This is Product Details page</h2>

      <div className="row">
        <div className="col-sm-3 offset-5">
          <div className="card">
            <p>Title: {product?.title}</p>
            <p>Price: {product?.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
