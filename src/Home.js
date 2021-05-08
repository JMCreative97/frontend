import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import landingImg from './img/landing-img.png';
import history from './History';



class Home extends Component {

  constructor(props){
    super(props);
    this.state = { };
  
  }
  
 
  componentDidMount() {
    // axios.get('http://localhost:3001/get-products')
    //   .then(res => {
    //     console.log(res);
    //     this.setState({ products: res.data });
    //   }).catch(err =>{
    //     console.log(`Cannot retrieve data ${err}`);
    //   });
  }

  render(){
    return (
      <div className="home">
        <img id="home-bg" src={landingImg} className="w-100"/>
        <Container>
          <Row id="home-content">
            <Col className="text-center">
              <h1>IN-STOCK</h1>
              <h3>Click below to look through our available items</h3>
              <Button variant="primary" className="mt-2" onClick={() => history.push('/all') }>Our Stock →</Button>
            </Col>
          </Row>
        </Container>
        <Container className="mt-lg-5 w-100" >
          <Row >
            <Col lg={3} xs={12} className="mt-5 mt-lg-0" >
              <Row> 
                <Col id="info-img" xs={4}>

                </Col>
                <Col xs={8} className="d-flex justify-content-center align-items-center"> 
                   <h4>Free delivery on orders over £20*</h4>
                </Col>
              </Row>
            </Col>
            <Col lg={3} xs={12} className="mt-5 mt-lg-0" >
            <Row>
                <Col id="info-img" xs={4}>
                
                </Col>
                <Col xs={8}  className="d-flex justify-content-center align-items-center">
                   <h4>Free delivery on orders over £20*</h4>
                </Col>
              </Row>
            </Col>
            <Col lg={3} xs={12} className="mt-5 mt-lg-0" >
            <Row>
                <Col id="info-img" xs={4}>
                
                </Col>
                <Col xs={8}  className="d-flex justify-content-center align-items-center">
                   <h4>Free delivery on orders over £20*</h4>
                </Col>
              </Row>
            </Col>
            <Col lg={3} xs={12} className="mt-5 mt-lg-0" >
              <Row>
                  <Col id="info-img" xs={4}>
                  
                  </Col>
                  <Col xs={8}  className="d-flex justify-content-center align-items-center">
                    <h4>Free delivery on orders over £20*</h4>
                  </Col>
                </Row>
            </Col>

          </Row>
        </Container>




      
        
      </div>
    )
  }
}

export default Home;
