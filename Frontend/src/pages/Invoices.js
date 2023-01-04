import React, { useEffect, useState} from "react";
import InvoiceCard from "../components/invoiceCard";
import handshake from "../icon/handshake.png";
// import axios from "axios";
// import api from "../api/api";
import "./invoices.css";
import Axios from "axios";



function Invoices() {

  const [orders, setOrders] = useState([]);

  console.log(orders);

  useEffect(() => {
    Axios.get("http://localhost:3001/orders").then((response) => {
      setOrders(response.data)
    })
  }, []);


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
        { typeof orders !== "undefined" && orders.map((order) => {

          return <InvoiceCard key={order.orderNfId} order={order} />
    
        })}

      </section>
    </main>
  );
}


export default Invoices;
