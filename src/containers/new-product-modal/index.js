import React  from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { addNewProduct, getProductList } from '../../actions/products.action';

import './newProductModal.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


 function NewProductModal(props) {
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [error,setError] = React.useState(false);
    const [newProductName, setNewProductName] = React.useState();
    const [newProductPrice, setNewProductPrice] = React.useState();
    const [newProductAvailable, setNewProductAvailable] = React.useState();

    function openModal() {
        setIsOpen(true);
    }
 
    function afterOpenModal() {
    // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
 
    function closeModal(){
        //clear state
        setNewProductName(undefined);
        setNewProductAvailable(undefined);
        setNewProductPrice(undefined);
        setError(false);
        setIsOpen(false);
    }

    const addNewProduct = () => {
        const allProducts = props.productsPage.products;
        console.log(allProducts);
        const indexOf = allProducts.findIndex((product) => product.name.toLowerCase() === newProductName.toLowerCase());
        if (indexOf > -1) {
            // triger error
            console.log('You alredy have item with this name');
            setError(true);
            return;
        }


        props.addNewProduct({
            name: newProductName,
            price: newProductPrice,
            available: newProductAvailable
        });
        closeModal();
    }

    return ( <div>
        <button className="Modal-btn" onClick={openModal}>new product</button>
         <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add new product"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Add new product</h2>
          <button onClick={closeModal}>close</button>
          <div>Fill the fields:</div>
          {error && <p>You alredy have item with this name</p>}
          
            Name: 
            <input 
                value={newProductName}
                onChange= { (e) => {
                    if(!e){return}
                    setNewProductName(e.target.value);
                }} 
            />
            Price: 
            <input 
                value={newProductPrice}
                onChange= { (e) => {
                    if(!e){return}
                    setNewProductPrice(e.target.value);
                }} 
            />
            In stock: 
            <input 
                value={newProductAvailable}
                onChange= { (e) => {
                    if(!e){return}
                    setNewProductAvailable(e.target.value);
                }} 
            />
            
            <button onClick={addNewProduct}>Create</button>
          
        </Modal>
    </div>

    )
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => {
    return {
        addNewProduct: item => dispatch(addNewProduct(item)),
        getAll: () => dispatch(getProductList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewProductModal);