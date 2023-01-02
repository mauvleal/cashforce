import React from "react";
import Table from "../components/table";
import handshake from "../icon/handshake.png";
import "./invoices.css";

class Invoices extends React.Component {
  render() {
    return (
      <main>
        <section className="frame">
          <div className="handShake">
            <img src={handshake} alt="HandShake SVG"></img>
            <p>Notas fiscais</p>
          </div>
          <p className="proposal">Visualize as notas fiscais que você tem.</p>
        </section>
        <Table/>
      </main>
    );
  }
}
export default Invoices;
