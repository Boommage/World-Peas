import { useState } from "react";
import { Button, Col, Container, Row, Stack, Toast, ToastContainer } from "react-bootstrap";
import { foodList, type CartItem } from "../utils/Food";
import ShopCard from "./ShopCard";
import "../utils/WP.css"


interface ShopProps {
    setCart: (item: CartItem) => void
    cartContent: CartItem[]
    changeLbs: (target: CartItem, newLbs: number) => void
}

export default function Shop({setCart, cartContent, changeLbs}: ShopProps) {

    const [toastArr, setToastArr] = useState<String[]>([])

    function addToCart(amount: number, name: string) {
        let plural = " lbs"
        console.log(amount)
        if(amount === 0) {
            return
        }
        if(amount === 1) {
            plural = " lb"
        }
        let message = amount+plural+" of "+name+" added to basket"

        const foodItem = foodList.find(item => item.name === name)
        if(!foodItem) {
            return
        }
        const cartItem = cartContent.find(item => item.food.name === name)
        if(cartItem && cartItem.lbs === amount) {
            return
        }
        if(cartItem && cartItem.lbs !== amount) {
            message = "Changed "+name+" amount to "+amount+plural
            changeLbs(cartItem, amount)
            setToastArr(prev => [...prev,message])
            return
        }
        setCart({
                food: foodItem,
                lbs: amount
        })
        setToastArr(prev => [...prev,message])

        console.log(toastArr)
    }

    return (
        <Container>
            <Row className="border-bottom">
                <Col xs={9}>
                    <Stack direction="horizontal" gap={3}>
                        <h1 className="text-start world-peas-font">Produce</h1>
                        <p className="mt-4"><span className="fw-medium">Fresh</span> — August 21, 2023</p>
                    </Stack>
                </Col>
                <Col>
                    <Stack direction="horizontal" gap={3} className="mt-2 ms-5 ps-4" >
                        <Button size="sm" className="fw-semibold wp-btn" variant="success">Default</Button>
                        <Button size="sm" className="fw-semibold" variant="light">A-Z</Button>
                        <Button size="sm" className="fw-semibold" variant="light">List View</Button>
                    </Stack>
                </Col>
            </Row>

            <Row className="mt-5 me-3">
                {foodList.map((food, index) => (
                    <Col xs={4} key={index}>
                        <ShopCard food={food} index={index} addToCart={addToCart}/>
                    </Col>
                ))}
            </Row>

            <ToastContainer position="bottom-end" className="p-3">
                {toastArr.map((toast, index) => (
                    <Toast key={index} 
                    onClose={() => setToastArr(prev => prev.filter((_,x) => x !== index))}
                    >
                        <Toast.Header>
                            <strong className="me-auto">Produce Added</strong>
                        </Toast.Header>
                        <Toast.Body>{toast}</Toast.Body>
                    </Toast>
                ))}
            </ToastContainer>
        </Container>
    );
}