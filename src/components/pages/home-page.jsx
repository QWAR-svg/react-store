import React, {Fragment} from "react";
import BookList from "../books-list/book-list";
import ShoppingCartTable from "../shopping-cart-table";
const HomePage = () => {
  return (
    <Fragment>
      <BookList/>
      <ShoppingCartTable/>
    </Fragment>
  )
};

export default HomePage;
