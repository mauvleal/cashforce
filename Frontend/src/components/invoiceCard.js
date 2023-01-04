import React from "react";


  function InvoiceCard ({order}) {

console.log(order.orderNumber);

    return (
 
            <div className="row">
            <div className="col-col1">{order.orderNfId}</div>
            <div className="col-col2">{order.orderNfId}</div>
            <div className="col-col3">{order.orderNfId}</div>
            <div className="col-col4">{order.orderNfId}</div>
            <div className="col-col5">{order.orderNfId}</div>
            <div className="col-col6">{order.orderNfId}</div>

             
              <button className="button"> Dados do Cedente</button>
            </div>
     
         
   
    );
  }

export default InvoiceCard;