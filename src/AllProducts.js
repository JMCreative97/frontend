import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import history from './History';
import { connect } from "react-redux";

class Item extends Component {
  render(){
    return (
      <Card className="mt-5">
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.text}</Card.Text>
      </Card>

    )
  }
}

class AllProducts extends Component {

  
    constructor(props){
      super(props);

      this.state = { products:[], productsLength:0 };
    
    }

    componentDidMount() {
        
        axios.get('http://localhost:3001/products/getAll').then((result) => {
            console.log(result.data);

            this.setState({
                products: result.data.products,
                productsLength: result.data.productsLength
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
            <Container className="mx-auto">
              <Row className="mx-auto">
                {
                  this.state.products.map((product) => ((
                    <Col sm={4}>
                      <Item title={product.title} text={product.description}/>
                    </Col>
                  )))
                }

                
              </Row>

            </Container>
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


export default connect(mapStateToProps,mapDispatchToProps)(AllProducts);
