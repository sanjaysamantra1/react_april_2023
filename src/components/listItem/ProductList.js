import React from "react";
import products from "./products.json";

export default function ProductList() {
  return (
    <>
      <h2 className="text-center">Product List</h2>

      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-sm-3">
                <div class="card">
                  <img src={product.image} class="card-img-top" alt="aa" width='200' height='150' />
                  <div class="card-body text-center">
                    <h5 class="card-title">{product.category}</h5>
                    <p class="card-text">{product.title}</p>
                    <p class="card-text">{product.price}</p>
                    <p class="card-text">{product.rating.rate}</p>
                    <a href="#" class="btn btn-primary">
                      BUY NOW
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
