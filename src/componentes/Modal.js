import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Examples extends Component {
    //creamos constructor e incicializamos su visibilidad como escondida, false
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    //function para cuando est visible
    openModal() {
        this.setState({
            visible: true
        });
    }

    //funcion para cuando cerramos con un click
    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <section>
                <input type="button" style={{backgroundColor:'white', color: 'black', border: '2px solid #008CBA', textAlign: 'center'}} value="Ves a la notícia" onClick={() => this.openModal()} />
                <Modal
                    visible={this.state.visible}
                    width="800"
                    height="600"
                    effect="fadeInUp"
                    scrollable={true}
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        
                        <h1>Titulo noticia</h1>
                        <p>Contenido</p>
                    </div>
                </Modal>
            </section>
        );
    }
}