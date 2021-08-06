import React from "react";
import "./shopping-cart-table.css";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
        <tr>
        <th></th>
        <th>Item</th>
        <th>Count</th>
        <th>Price</th>
        <th>Action</th>
        </tr>
        </thead>

        <tbody>
          <td>1</td>
          <td>Site Reliability Engineering</td>
          <td>2</td>
          <td>40</td>
          <td>
            <button>Delete</button>
            <button>Decrease</button>
            <button>Increase</button>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCartTable;
