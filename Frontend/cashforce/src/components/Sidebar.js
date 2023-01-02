import React from "react";
import cashforce from '../icon/cashforce.png'
import handshake from '../icon/handshake.png'
import { Link } from 'react-router-dom';


class SideBar extends React.Component {
    render() {
        return (
            <main className='sider-financiador'>
                <div className="sider-fornecedor">

                    <div className="menu-hero">
              <img src={ cashforce } alt='CashForce logo' />
                    </div>
                                        
                                <Link to="/invoices" style={{textDecoration: 'none'}}>
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
                                </Link>

                                
                </div>
              
            </main>
          );
        }
    }        
export default SideBar;