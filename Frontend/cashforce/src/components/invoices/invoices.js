import React from "react";
import cashforce from '../icon/cashforce.png'
import handshake from '../icon/handshake.png'
import './home.css';
import Table from "../components/table/table";


class Invoice extends React.Component {
    render() {
        return (
            <div className='container'>
              <div className='sider-financiador'>
                <div className="sider-fornecedor">

                    <div className="menu-hero">
              <img src={ cashforce } alt='CashForce logo' />
                    </div>
                                        
                    <div className="menu-item">
                        <div className="ret">

                        <div className="menu-item-selected">    
                            <ul className='menu-item-frame-1'>
                                <li>
                                    <img src={ handshake } alt="HandShake SVG"></img>
                                     Notas fiscais
                                </li>
                             </ul>
                        </div>  
                        </div>
                    </div>
                </div>
              </div>

              <div className='main-content'>
                <div className='header-sistema'>
                </div>
                <div className='frame'>
                  <div className='handShake' >
                    <img src={ handshake } alt="HandShake SVG"></img>
                    <p>Notas fiscais</p>
                  </div>
                  <p className='proposal'>Visualize as notas fiscais que você tem.</p>
                </div>
                <div><Table/></div>
              </div>
              
              {/* <div><Table /></div> */}
            </div>
           
          );
        }
    }        
export default Invoice;