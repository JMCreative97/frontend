import React, {Component} from 'react';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router';

class SignUp extends Component {

    constructor(props){
      super(props);
      this.state = { email: '', password: '', successOpen:false, failOpen:false };
    
    }

    updateEmail = (event) => {
        this.setState({email: event.target.value});
    }

    updatePassword = (event) => {
        this.setState({password: event.target.value});
    }

    login = (event) => {
        event.preventDefault();

        this.setState({failOpen:false, successOpen: false});

        if(this.state.email !== '' && this.state.password !== ''){

            console.log(this.state.email + "  " + this.state.password);
           
            axios.post(('http://localhost:3001/users/register'), {
                email: this.state.email,
                password: this.state.password
            }).then((response) => {
                console.log(`resonse : ${response}`);
                this.setState({successOpen:true, email: '' , password: ''});
            }).catch((err) => {
                console.log(`error : ${err}`);
                this.setState({failOpen:true});
            });

            
        }

        event.target.reset();
    }

    render(){
        return (
            <Container id="login-container mt5" >
                <Alert variant='success' show={this.state.successOpen}> Successfully registered </Alert>
                <Alert variant='danger' show={this.state.failOpen}> Register was unsuccessful </Alert>
                <Form xs={4} className="mx-auto mt-2" id="login-form" onSubmit={this.login}>
                    <h2 style={{fontSize:"2rem"}}>Register</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.updateEmail} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.updatePassword} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                        <p>Have an account?<a href="/login"> Sign in</a></p>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default SignUp
