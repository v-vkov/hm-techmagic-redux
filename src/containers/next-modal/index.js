import React from 'react';
import { connect } from 'react-redux';
import  Modal  from 'react-modal';

import './next-modal.css'


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

Modal.setAppElement('body');

function NextBtnModal(props) {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const amount = props.cartPage.inCart.map((item) => item.amount).reduce((a, b) => a + b, 0);
    const totaly = props.cartPage.inCart.map(item => item.price).reduce((sum, price)  => (+sum + +price), 0);

  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

    return ( <div className="App-next">
        <button className="App-next-btn" onClick={openModal}>NEXT</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>SUMMARY</h2>
          <div>Shopping is successful!</div>
          <div> {amount} products -  totaly : {totaly}$</div>
          <button onClick={closeModal}>close</button>
        </Modal>
    </div>

    )
}


const mapStateToPrors = state => ({...state});

export default connect(mapStateToPrors)(NextBtnModal);