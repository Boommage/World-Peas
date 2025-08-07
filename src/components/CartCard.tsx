import { Card, Collapse, Dropdown, Stack } from "react-bootstrap";
import { lbsOptions, type CartContextType, type CartItem } from "../utils/Food";
import { useState } from "react";
import "../utils/WP.css"
import { useOutletContext } from "react-router-dom";

interface CartCardProps {
    cartData: CartItem
}

export default function CartCard({cartData}: CartCardProps) {

    const { changeLbs, removeItem } = useOutletContext<CartContextType>();

    const [open, setOpen] = useState(false)
    const [calculatedCost, setCalculatedCost] = useState(-1)

    function reCalculateCost(target: CartItem, lbs: number) {
        changeLbs(target, lbs)
        setCalculatedCost(parseFloat((Math.round((target.food.cost * lbs) * 100) / 100).toFixed(2)))
    }

    const initialCalcCost = parseFloat((Math.round((cartData.food.cost * cartData.lbs) * 100) / 100).toFixed(2))

    return (
        <Card className="d-flex flex-row align-items-center">
            <Card.Img src={cartData.food.srcImg} className="w-25"/>
            <Card.Body>
                <Card.Title className="fw-bold">
                    <div className="d-flex justify-content-between">
                        {cartData.food.name}
                        <span>${(calculatedCost === -1 ? initialCalcCost : calculatedCost)}</span>
                    </div>
                </Card.Title>
                <Card.Subtitle className="fs-5 wp-color">${cartData.food.cost} / lb</Card.Subtitle>
                <Stack direction="horizontal" gap={1} className="mt-3 ms-2">
                    <div style={{ minWidth: "60px"}}>
                        {cartData.lbs} {(cartData.lbs === 1 ? "lb" : "lbs")}
                    </div>
                    <i className="fa-solid fa-pencil text-body-secondary ms-5 mt-1" style={{ cursor: "pointer" }}
                    onClick={() => setOpen(!open)}/>
                        <Dropdown show={open} onToggle={setOpen}>
                            <Collapse in={open}>
                                <div>
                                    <Dropdown.Toggle as={"span"} style={{ cursor: "pointer" }}/>    
                                    <Dropdown.Menu>
                                        {lbsOptions.map((lbs, index) => (
                                            <Dropdown.Item key={index} onClick={() => reCalculateCost(cartData, lbs)}>{lbs}</Dropdown.Item>
                                        ))}
                                        <Dropdown.Item onClick={() => removeItem(cartData)}>Remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </div>
                            </Collapse>
                        </Dropdown>     
                             
                </Stack>
            </Card.Body>
        </Card>
    )
}