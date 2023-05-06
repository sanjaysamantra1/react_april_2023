import React from "react";
import products from "./products.json";

export default function ProductsTable() {
  return (
    <>
      <h2 className="text-center">Products Table</h2>
      <table className="table table-bordered table-striped">
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.rating.rate}</td>
                <td>
                  <img src={product.image} width='80' height='80' />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
