import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Col, InputGroup, Container, Alert, FormControl } from 'react-bootstrap';
import axios from 'axios';
import History from './History';
import { connect } from "react-redux";

class CreateProduct extends Component {

    constructor(props){
      super(props);
      this.state = { email: '', password: '', files: [] };
    
    }

    setSelectedFile = event => {
       
        const _files = event.target.files;
        console.log(_files);
       
    }

    updateEmail = (event) => {
        this.setState({email: event.target.value});
    }

    updatePassword = (event) => {
        this.setState({password: event.target.value});
    }

    login = (event) => {
        event.preventDefault();

    
        event.target.reset();
    }

    render(){
        return (
            <Container id="login-container mt5" >
                 <Alert variant='danger' show={this.state.failOpen}> Log in was unsuccessful </Alert>
                <Form xs={4} className="mx-auto mt-2" id="login-form" onSubmit={this.login}>
                    <h2 style={{fontSize:"2rem"}}>Create Product</h2>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group controlId="formPrice">
                    <Form.Label>Description </Form.Label>
                    <InputGroup>
                        <FormControl as="textarea" placeholder="Enter product description" aria-label="With textarea" />
                    </InputGroup>
                    </Form.Group>
                    
                    <Form.Group controlId="formStock">
                        <Form.Label>Stock Level</Form.Label>
                        <InputGroup controlId="formStock">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Units</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="number" placeholder="0" />
                        </InputGroup>
                    </Form.Group>    
                    
                    <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                        <InputGroup controlId="formPrice">
                            <InputGroup.Prepend>
                                <InputGroup.Text>£</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="number" placeholder="0.0" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formFile">
                        <Col className="m-0 p-0">
                            <Form.Label>Upload Images</Form.Label>
                        </Col>
                        <Col className="m-0 p-0">
                            <input type="file" name="filefield" multiple="multiple" accept=".png, .jpeg"  onChange={(e) => this.setSelectedFile(e)}/>
                        </Col>
                      
 
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form.Group>

                </Form>

            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // login: (_token, _email) => dispatch({
        //     type:'LOGIN',
        //     payload: {
        //         token: _token,
        //     },
        // }),
        // logout: () => dispatch({type:'LOGOUT'})
    }
 };


export default connect(mapStateToProps,mapDispatchToProps)(CreateProduct);
