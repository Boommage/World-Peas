import { Button, Card, Col, Collapse, Form, Row } from "react-bootstrap";
import { lbsOptions, type FoodItem } from "../utils/Food";
import { useState } from "react";
import "../utils/WP.css"


interface ShopCardProps {
    food: FoodItem
    index: number
    addToCart: (amount: number, name: string) => void
}


export default function ShopCard({food, index, addToCart}: ShopCardProps) {

    function openForm(index: number) {
        if(index === cardClicked) {
            setCardClicked(-1)
            return
        }
        setCardClicked(index)
    }

    const [lbs, setlbs] = useState(0)
    const [cardClicked, setCardClicked] = useState(-1)

    return (
        <Card key={index} className="ms-2">
            <div style={{cursor: "pointer"}} onClick={() => openForm(index)} >
                <Card.Img variant="top" src={food.srcImg}/>
                <Card.Body>
                    <Card.Title className="fw-bold">{food.name}</Card.Title>
                    <Card.Subtitle className="fs-4 wp-color">${food.cost} / lb</Card.Subtitle>
                    <Card.Text className="text-secondary mt-2">{food.desc}</Card.Text>
                </Card.Body>
            </div>
            <Collapse in={cardClicked === index}>
                <Form className="border-top">
                    <Form.Group className="m-3">
                        <Form.Label>Enter amount: </Form.Label>
                        <Row>
                            <Col xs={3} >
                                <Form.Select onChange={(event) => setlbs(parseFloat(event.target.value))}>
                                    {lbsOptions.map((option, index) => (
                                        <option key={index}>{option}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                            <Col xs={3}>
                                <h5 className="mt-2 fst-italic">lbs</h5>
                            </Col>
                            <Col className="ms-4 ps-4">
                                <Button variant={"success"} className="ms-4 wp-btn"
                                onClick={() => addToCart(lbs,food.name)}>
                                    Add to Cart
                                </Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Collapse>
        </Card>
    )
}