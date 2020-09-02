import React, { Component } from 'react';
import { ButtonBackToHome } from '../componentes/ButtonBackToHome';
import axios from 'axios';

export class Noticia extends Component {
       

    state = {
        noticia: {},
    }

    nl2br(str, replaceMode, isXhtml) {

        var breakTag = (isXhtml) ? '<br />' : '<br>';
        var replaceStr = (replaceMode) ? '$1' + breakTag : '$1' + breakTag + '$2';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr);
    }

    async _fetchNoticia({ id }) {
        let url = "http://www.mesebre.cat/json/noticia/?id=" + id;

        const response = await axios.get(url);

        console.log(response);

        this.setState({
            noticia: response.data
        })
    }

    _goBack() {
        window.history.back();
    }

    componentDidMount = () => {
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchNoticia({ id }) 
    }

   render() {

       const { id,titulo, fecha, img, descripcion, contenido } = this.state.noticia

       return (
           <div>
              
               <div className="section">
                   <div className="row">
                       <div className="col-md-12 text-center p-4">
                           <ButtonBackToHome />
                       </div>
                       <div className="col-md-3"></div>
                       <div className="col-md-6">
                            <div className="card" id={id} style={{cursor:'default'}}>
                                <img className="card-img-top" src={img} alt={titulo} />
                                <div className="card-body">
                                    <h1 className="card-title">{titulo}</h1>
                                    <em>{fecha}</em>                                   
                                   {!this.nl2br(descripcion)} 
                                   <p>{contenido}</p>
                                </div>
                           </div>
                       </div>
                   </div>
               </div>               
           </div>
        )    
    }
}