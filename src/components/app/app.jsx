import React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import ShopHeader from "../shop-header";
import { HomePage, CardPage } from "../pages";

const App = () => {
  return (
    <main role="main" className="container">
       <ShopHeader numItems={5} total={20}/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/card" component={CardPage} />
      </Switch>
    </main>
  );
};

export default App;
