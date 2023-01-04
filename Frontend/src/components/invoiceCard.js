import React from "react";
import statusArray from "../utils/orderStatus";
import { date, money } from '../utils/helperData';


  function InvoiceCard ({order}) {

    return (
 
            <div className="row">
            <div className="res1">{order.orderNfId}</div>
            <div className="res2">{order.buyerId}</div>
            <div className="res3">{order.providerId}</div>
            <div className="res4">{date(order.emissionDate)}</div>
            <div className="res5">{money(order.value, 'BRL')}</div>
            <div className="res6">{statusArray[order.orderStatusBuyer]}</div>

             
              <button className="button"> Dados do Cedente</button>
            </div>
     
         
   
    );
  }

export default InvoiceCard;