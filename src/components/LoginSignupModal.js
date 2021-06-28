import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import AccountsModel from "../models/AccountsModel";

class LoginSignupModal extends React.Component {
  state = {
    username: "",
    password: "",
    message: "",
    displayname: "",
    signupUsername: "",
    signupPassword: "",
    signupPasswordReenter:"",
    signupErrorMessage: "",
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignup = async (event) => {
    event.preventDefault();

    // Check is passwords match
    if(this.state.signupPassword !== this.state.signupPasswordReenter) {
      this.setState(
        { 
          signupErrorMessage: "Passwords did not match. Please try again.", 
        }
      );
    } else {
      const newUser = {
        username: this.state.signupUsername,
        password: this.state.signupPasswordReenter,
      };

      const createAcctResp = await AccountsModel.create(newUser);
      console.log('Create acct response is: ', createAcctResp);

      if (createAcctResp.status !== 200) {
        this.setState({ signupErrorMessage: createAcctResp.message });
      } else {
        await this.doLogin(newUser);
        this.setState({
          displayname: this.state.signupUsername,
          signupUsername: "",
          signupPassword: "",
          signupPasswordReenter:"",
        })
      }
  
    }

    

  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("In handle submit Login form");
    const userData = {
      username: this.state.username,
      password: this.state.password
    }
    await this.doLogin(userData);
  };

  doLogin = async (userData) => {
    try {
      const loginResp = await AccountsModel.login(userData);
      console.log('Login resoponse is: ', loginResp);

      // Unsuccessful login
      if (loginResp.status !== 200) {
        this.setState(
          { 
            message: loginResp.message,
            username: '',
            password: ''
          }
        );
      // Handles successful login
      } else {
        this.setState({
          displayname: userData.username,
          username: '',
          password: '',
          message: ''
        });

        this.props.addToken(loginResp.token);
        this.props.handleSuccessfulLogin(this.state.displayname);
        this.props.closeModal();

        // localStorage.setItem('token', data.token);
      }

    } catch(err) {
      console.error(err);
    }
  }



  render() {
    let loginDisplay;
    if(!this.props.isLoggedIn) {
      loginDisplay =
      <Form id="login-form" onSubmit={this.handleSubmit}>
        <p>Already a customer?</p>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter username"
            value={this.state.username}
            onChange={this.handleInputChange}
            name="username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
          />
        </Form.Group>
        <Button variant="custom" type="submit">
          Submit
        </Button>
        {this.state.message && <Form.Text style={{color:'red'}}>{this.state.message}</Form.Text>}
      </Form>
    } else {
      loginDisplay =
        <>
        <Modal.Header closeButton>
          <Modal.Title>Hello {this.props.username}</Modal.Title>
        </Modal.Header>
        
          <Button variant="custom" onClick={this.props.handleLogout}>
              Logout
          </Button>
        </>
    }

    return (
      <>
        <Modal show={this.props.show} onHide={this.props.closeModal} size="lg">
          <Row>
            <Col>
              {loginDisplay}
            </Col>
            <Col>
              <Form id="create-account-form" onSubmit={this.handleSignup}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                    type="username" 
                    placeholder="Enter username" 
                    value={this.state.signupUsername}
                    onChange={this.handleInputChange}
                    name="signupUsername"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={this.state.signupPassword}
                    onChange={this.handleInputChange}
                    name="signupPassword"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Reenter Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={this.state.signupPasswordReenter}
                    onChange={this.handleInputChange}
                    name="signupPasswordReenter"
                  />
                </Form.Group>
                <Button variant="custom" type="submit">
                  Submit
                </Button>

                {this.state.signupErrorMessage && <Form.Text style={{color:'red'}}>{this.state.signupErrorMessage}</Form.Text>}
              </Form>
            </Col>
          </Row>
        </Modal>
      </>
    );
  }
}

export default LoginSignupModal;
