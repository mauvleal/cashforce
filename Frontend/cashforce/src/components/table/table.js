import React from 'react';
import './table.css'

class Table extends React.Component {
  render() {
      return (
         <div className='notas'> 
            <div  className='cabecalho'>
                <ul>
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
            <div className='row'>
              <button className='button'> Dados do Cedente</button>
            </div>
            <div className='row'>
            <button className='button'> Dados do Cedente</button>
            </div>
            <div className='row'>
            <button className='button'> Dados do Cedente</button>
            </div>
         </div>
        );
      }
  }        
export default Table; 