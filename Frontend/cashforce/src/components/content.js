import React from "react";
import { Route, Switch } from "react-router-dom";
import Invoices from "../pages/Invoices";
import Header from "./header";

class Content extends React.Component {
  render() {
    return (
      <main className="main-content">
        <Header />
        <Switch>
          <Route path="/invoices" component={Invoices}></Route>
        </Switch>
      </main>
    );
  }
}
export default Content;
