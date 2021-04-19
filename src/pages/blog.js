import React from 'react'
import '../styles/blog.scss'
import Footer from '../components/Footer'
import {Card, Col, Jumbotron, Row} from 'react-bootstrap'

const BlogPage = () => {
    return(
        <div>
            <Jumbotron className="text-center" style={{fontWeight: "bold", fontSize: "3.5vw", letterSpacing: "0.1em"}}>
                My work
            </Jumbotron>
            <Row id="row">
                <Col>
                    <Card  className="mx-auto my-2">
                        <Card.Body>
                            <Card.Title style={{fontWeight: "bold"}}>CoAP</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link id="link" href="#">Read more...</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card  className="mx-auto my-2">
                        <Card.Body>
                            <Card.Title style={{fontWeight: "bold"}}>MQTT</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link id="link" href="#">Read more...</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card  className="mx-auto my-2">
                        <Card.Body>
                            <Card.Title style={{fontWeight: "bold"}}>LoRA and LoRAWAN</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link id="link" href="#">Read more...</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

export default BlogPage