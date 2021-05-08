import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Container, ButtonGroup, Button, Row, Tab, Nav, Col, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import history from './History';
import { connect } from "react-redux";
import authAxios from './AuthAxios';

class InfoBox extends Component {

   
    constructor(props){
        super(props);
        this.value = sessionStorage.getItem(props.content) ? sessionStorage.getItem(props.content) : 'Undefined';
    }   

    render(){
        return(  
            <div style={{borderRadius:'1rem'}}>
                <h4 className="mt-2 mb-0 ml-0">{this.props.title}</h4>
                <p className="mb-1 ml-0">{this.value}</p>
            </div>
        )
    }

}

class Account extends Component {

    constructor(props){
      super(props);

      this.state = { email:'', newEmail: '' };
    
    }

    componentDidMount() {
        
        authAxios.post('http://localhost:3001/users/account').then((result) => {
            console.log(result.data.user.email);

            this.setState({
                email: result.data.user.email
            });
            
        }).catch((error) => {
            console.log(error);
           
            //this.logoutUser();
        });
    }

    logoutUser = () => {
        {this.props.logout()};
        history.push('/');
    }

    render(){
        return (
            <div>
                { 
                this.props.authenticated ? 
                <Container className="w-100 mt-3">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="w-100" >
                    <Row>
                      <Col xs={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Details</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Orders</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Tickets</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col xs={9}>
                        <Tab.Content className="mt-1">
                          <Tab.Pane eventKey="first">
                            <h5>Account Details</h5>
                            <div style={{borderRadius:'1rem'}}>
                            <h4 className="mt-2 mb-1 ml-0">Email</h4>
                            <p className="mt-2 mb-1 ml-0">{this.state.email}</p>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <h5>Orders</h5>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <h5>Tickets</h5>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                  </Container>
                  
                 :
                    <div className="mx-auto mt-5 w-100">
                        <h3 style={{textAlign:'center'}}><a style={{color:'blue', cursor:'pointer'}}onClick={()=> history.push('/login')}>Log in</a> to access your account</h3>
                    </div>
                 
                }
                
               
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        authenticated: state._authenticated
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({type:'LOGOUT'})
    }
 };


export default connect(mapStateToProps,mapDispatchToProps)(Account);
