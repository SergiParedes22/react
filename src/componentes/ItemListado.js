import React from 'react';
import Modal from './Modal';

/*const ItemListado = (props) => {

  const noticia = props.noticia;
  
  return (
    //aqui se carga la imagen, titulo y id de la noticia, supongo que es aqui donde debo progmar el modal para que cuando clique aparezca el pop
    <Link to={`/noticia/${noticia.id}`} style={{ float: 'left' }} className="card col-md-6 ">      
        <img className="card-img-top " style={{ width:'90%', marginLeft:'5%'}} src={noticia.thumb} alt={noticia.titulo}/>
          <div className="card-body">
          <h2 className="card-title">{noticia.titulo}</h2>         
            <em>{noticia.fecha}</em>          
          </div>
      </Link>
    
  )
    
}

export default ItemListado;*/
const ItemListado = (props) => {

  const noticia = props.noticia;

  function clicar(props) {
    console.log(noticia.contenido)
    // prompt(noticia.id, noticia.contenido, noticia.fecha)
    //return window.open('mesebre.com');
  }

   return (
    <div style={{ float: 'left' }} className="card col-md-6 " onClick={clicar}>
          <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
          <div className="card-body">
            <h2 className="card-title">{noticia.titulo}</h2>
            <em>{noticia.fecha}</em>
            <Modal></Modal>
          </div>
        </div>
    
  
)

  }

export default ItemListado;
  /*function foo (props) {
    return (
      <Modal isOpen={true}>
        <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
        <div className="card-body">
          <h2 className="card-title">{noticia.titulo}</h2>
          <em>{noticia.fecha}</em>
        </div>
      </Modal>
    )


  }*/

  /*function clicar(noticia) {

    return (
      console.log(noticia.id)
    )
  }

  return (
    <button onclick={clicar}>
<div style={{ float: 'left' }} className="card col-md-6 ">
      <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
      <div className="card-body">
        <h2 className="card-title">{noticia.titulo}</h2>
        <em>{noticia.fecha}</em>
      </div>
    </div></button>
    
  )*/


/*function clicar(noticia) {
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>{props.thumb}</div>
      <div>{noticia.thumb}</div>

    </Popup>
  )


}

return (
  <div onClick={clicar}>
    <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
    <div className="card-body">
      <h2 className="card-title">{noticia.titulo}</h2>
      <em>{noticia.fecha}</em>
    </div>
  </div>
)*/






/*return (
  //aqui se carga la imagen, titulo y id de la noticia, supongo que es aqui donde debo progmar el modal para que cuando clique aparezca el pop
  <div to={`/noticia/${noticia.id`} onClick={clicar()} style={{ float: 'left' }} className="card col-md-6 ">
    <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
    <div className="card-body">
      <h2 className="card-title">{noticia.titulo}</h2>
      <em>{noticia.fecha}</em>
    </div>
  </div>

)*/
/*return (
  function clicar(props) {
    return (
      <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <ModalHeader>
          <div>{noticia.titulo}</div>
        </ModalHeader>
        <ModalBody>
          <div>{noticia.descripcion}</div>
        </ModalBody>
      </Modal>
    )
  }
  {<div onClick={clicar()} style={{ float: 'left' }} className="card col-md-6 ">
    <img className="card-img-top " style={{ width: '90%', marginLeft: '5%' }} src={noticia.thumb} alt={noticia.titulo} />
    <div className="card-body">
      <h2 className="card-title">{noticia.titulo}</h2>
      <em>{noticia.fecha}</em>
    </div>
  </div>}
)*/

