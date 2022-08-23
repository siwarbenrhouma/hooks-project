
import {useRef,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddMovie(props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const namemovie=useRef();
  const movieimage=useRef();
  const movierate=useRef();
  const add=(e)=>{
   props.setMovie([...props.movies,{name:namemovie.current.value,image:movieimage.current.value,rate:movierate.current.value}]);
   handleClose() 
  }
    return (
    
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type={"text"} ref={namemovie} placeholder="name plz"></input>
            <input type={"text"} ref={movieimage}placeholder="image plz"></input>
            <input type={"text"} ref={movierate} placeholder="rate plz"></input>
            <button type="button" className="btn btn-primary" onClick={add}> Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
        </Modal.Body>

      </Modal>
        
  </div>
    )
} 
export default AddMovie




