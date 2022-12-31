import React from "react";
import cashforce from '../icon/cashforce.png'
import handshake from '../icon/handshake.png'
import './sideBar.css';


class SideBar extends React.Component {
    render() {
        return (
            <div className='container'>
      <div className='sidebar-container'>
      <img src={ cashforce } alt='this is a CashForce logo' />
        <ul className='sidebar-container'>
            <li>
              <img src={ handshake } alt="HandShake SVG"></img>
              Notas fiscais
            </li>
        </ul>
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
          {/* <OrderTable /> */}
      </div>
    </div>
        )
    }
}

export default SideBar;