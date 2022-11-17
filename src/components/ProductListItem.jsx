import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ShoppingContext } from './Context/ShoppingContext';
import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { BrowserRouter, Route, Routes ,Navigate, useNavigate} from 'react-router-dom';
import ShowProdct from './ShowProdct';

function ProductListItem({product}) {   
  const {AddToCart} = useContext(ShoppingContext)
  const [lgShow, setLgShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [showProd,setShowProd] = useState()
  const navigate = useNavigate()
  const showProduct = (id) =>{
    setLgShow(true)
    if(product.id===id){
      setShowProd(product,{state:{
        prod:showProd
      }})
    }
    // navigate("/show")
    
  }
  console.log(showProd && showProd.image);   
  return (
    <Card style={{ width: '18rem' }} >
              <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
            </Modal.Title>
          </Modal.Header>
          {
            showProd && 
          
          <Modal.Body>
            <img src={showProd.image} alt={showProd.title} width={"100px"} height={"100px"} variant="top"/>
          </Modal.Body>
          }
        </Modal>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {showProd && showProd.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {showProd && showProd.description}
          <h3>{showProd && showProd.price}$</h3>
          </Modal.Body>
        </Modal>
      <Card.Img variant="top" src={product.image} className={"w-50 h-50"} onClick={(id)=>showProduct(product.id)}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
            {product.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>AddToCart(product)}>Add To Cart <i className="bi bi-bag-check"></i></Button>
      </Card.Body>
    </Card>
  );

}

export default ProductListItem;

