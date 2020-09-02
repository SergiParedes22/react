import React, { Component } from 'react';
import axios from 'axios';
import ItemListado from './ItemListado';




export class ListadoNoticias extends Component {
        
    state = {
        noticias: [],
    }

    

    componentDidMount = async () => {
        let url = "http://www.mesebre.cat/json/noticias.php";

        const response = await axios.get(url);

        this.setState({
            noticias: response.data
        })
    }

    _renderListado() 
    {
        return (
            <div className="ListaNoticias">
                {
                    this.state.noticias.map(noticia => {
                        return (
                            <ItemListado key={noticia.id}
                                noticia={noticia} />
                            
                        )
                    })
                }
            </div>
        )
    }
    
    render() {
    
        return (
            <div>
            {
                this.state.noticias.lenght === 0
                    ? <p>No se han encontrado noticias</p>
                : this._renderListado() 
                
                }
            </div>
        )
    }
    
};
