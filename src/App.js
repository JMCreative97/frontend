import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import  history from './History';
import { Col, Container, Row, Form, FormControl, Button, Navbar, Nav, DropdownButton, Dropdown, InputGroup } from 'react-bootstrap';
import { Link, Router, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import Logo from "./img/logo.png";
import Home from './Home';
import CreateProduct from './CreateProduct';
import AllProducts from './AllProducts';
import Login from './Login';
import Register from './Register';
import Account from './Account';

class App extends Component {

  constructor(props){
    super(props);
  
  }
  
  componentDidMount() {
  }

  logoutUser = () => {
    {this.props.logout()};
    history.push('/');
  }
  
  render(){

    return (
      <div>
       <Router history={history}>
        <Container id="top-container" className="w-100 mt-5 mb-5" form-inline>
          <Row  className="justify-content-center" sm={12} >
            <Col md={2} xs={2} className="text-center align-middle">
              <Link to={'/'}><img id="brand-logo" src={Logo}/></Link>
            </Col>
            <Col md={6} xs={6} className="text-align-center text-center d-flex justify-content-center">
              <Form inline>
              <InputGroup>
                <FormControl
                  placeholder="Search"
                  aria-label="Search"/>
                <InputGroup.Append>
                  <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
              </InputGroup>
                {/* <Row>
                  <Col style={{ paddingLeft: 0, paddingRight: 0 }}f>
                  <FormControl type="text" placeholder="Search" className=""/>
                  </Col>
                  <Col  style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <Button variant="outline-info">Search</Button>
                  </Col>
                </Row> */}
              </Form>
            </Col>
            <Col md={2} xs={0} className="d-none d-md-block text-center align-middle">
              CALL US
            </Col>
            <Col md={2} xs={2} className="text-center align-middle">
              {
                this.props.authenticated ?
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    User
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() =>  history.push('/account')}>Account</Dropdown.Item>
                    <Dropdown.Item><Button variant="danger" onClick={this.logoutUser} >Log out</Button></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                :
                <Link to={'/login'}><Button variant="primary">Login</Button></Link>
              }
             
            </Col>
          </Row>
        </Container>

        <Navbar bg="light" variant="light" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto w-100 d-flex " id="navbar">
            <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="">Football Goals</Nav.Link>
              <Nav.Link href="">Footballs</Nav.Link>
              <Nav.Link href="">About</Nav.Link>
              <Nav.Link href="">Contact</Nav.Link>
              <Nav.Link href="">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

  
          <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login} />
                <Route exact path='/admin/createProduct' component={CreateProduct}/>
                <Route exact path='/register' component={Register} />
                <Route exact path='/account' component={Account} />
                <Route exact path='/all' component={AllProducts} />
          </Switch>
        </Router>
      </div>
    )};
}

const mapStateToProps = (state) => {
  return {
    authenticated: state._authenticated
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({type:'LOGIN'}),
    logout: () => dispatch({type:'LOGOUT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
