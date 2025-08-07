import { Button, Card, Collapse, Form } from "react-bootstrap";
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

    const [lbs, setlbs] = useState(1)
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
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <Form.Select onChange={(event) => setlbs(parseFloat(event.target.value))} defaultValue={lbs}>
                                        {lbsOptions.map((option, index) => (
                                        <option key={index} className="wp-option">{option}</option>
                                        ))}
                                    </Form.Select>
                                    <h5 className="mt-2 ms-2 fst-italic">{lbs === 1 ? "lb" : "lbs"}</h5>
                                </div>
                                <Button variant={"success"} className="wp-btn"
                                onClick={() => addToCart(lbs,food.name)}>
                                    Add to Cart
                                </Button>
                            </div>
                    </Form.Group>
                </Form>
            </Collapse>
        </Card>
    )
}