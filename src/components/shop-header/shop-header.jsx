import React from "react";
import "./shop-header.css";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <a href="" className="logo text-dark">
        Restore
      </a>
      <a className="disc" href="">
        <i class="fas fa-shopping-cart"></i>
        {numItems} items ${total}
      </a>
    </header>
  );
};
export default ShopHeader;
