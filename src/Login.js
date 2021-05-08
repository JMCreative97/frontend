import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import History from './History';
import { connect } from "react-redux";

class Login extends Component {

    constructor(props){
      super(props);
      this.state = { email: '', password: '', failOpen:false, user:'', token:'' };
    
    }

    updateEmail = (event) => {
        this.setState({email: event.target.value});
    }

    updatePassword = (event) => {
        this.setState({password: event.target.value});
    }

    login = (event) => {
        event.preventDefault();

        this.setState({failOpen:false});

        if(this.state.email !== '' && this.state.password !== ''){
            axios.post(('http://localhost:3001/users/login'), {
                email: this.state.email,
                password: this.state.password
            }).then((response) => {
                console.log("SUCCESS");
                this.setState({email:'', password:''});
                const token = response.data.token;
                sessionStorage.setItem('token', token); 
                this.props.login(response.data.token);
                History.push('/');
            }).catch((err) => {
                console.log("ERROR");
                console.log(`error : ${err}`);
                this.setState({email:'', password:'', failOpen:true});
            }); 
        }
        event.target.reset();
    }

    render(){
        return (
            <Container id="login-container mt5" >
                 <Alert variant='danger' show={this.state.failOpen}> Log in was unsuccessful </Alert>
                <Form xs={4} className="mx-auto mt-2" id="login-form" onSubmit={this.login}>
                    <h2 style={{fontSize:"2rem"}}>Log In</h2>
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
                        <p>Don't have an account? <a href="/register">Register</a></p>
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
        login: (_token, _email) => dispatch({
            type:'LOGIN',
            payload: {
                token: _token,
            },
        }),
        logout: () => dispatch({type:'LOGOUT'})
    }
 };


export default connect(mapStateToProps,mapDispatchToProps)(Login);
