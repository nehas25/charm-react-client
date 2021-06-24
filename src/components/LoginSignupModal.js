import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function LoginSignupModal(props) {

  return (
    <>
      {/* <Modal show={show} onHide={handleClose}> */}
      <Modal show={props.show} onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary"> */}
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          {/* <Button variant="primary"> */}
          <Button variant="primary" onClick={props.closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginSignupModal;