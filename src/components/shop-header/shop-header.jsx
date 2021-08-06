import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";
const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="" className="logo text-dark">
        Restore
      </Link>
      <Link className="disc" to="/card">
        <i className="fas fa-shopping-cart"></i>
        {numItems} items ${total}
      </Link>
    </header>
  );
};
export default ShopHeader;
