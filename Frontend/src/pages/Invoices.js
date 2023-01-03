import React from "react";
import InvoiceCard from "../components/invoiceCard";
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
        <section className="notas">
          <div className="cabecalho">
            <ul className="table-header">
              <li>
                <div className="col-1">NOTA FISCAL</div>
                <div className="col-2">SACADO</div>
                <div className="col-3">CEDENTE</div>
                <div className="col-4">EMISSÃO</div>
                <div className="col-5">VALOR</div>
                <div className="col-6">STATUS</div>
                <div className="col-7"></div>
              </li>
            </ul>
          </div>
          
         <InvoiceCard/>
     
         
        </section>
      </main>
    );
  }
}
export default Invoices;
