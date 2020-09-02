import React, { Component } from 'react';
import { ListadoNoticias } from '../componentes/ListadoNoticias';
import { Modal } from '../componentes/Modal';



export class Home extends Component{
    
    render() {
        return (
            <div className="section" >                
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <img className="logo" alt="Logo" src="http://www.mesebre.cat/img/logo-mesebre.png" />
                        {
                             <ListadoNoticias />
                             
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}