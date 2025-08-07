import { useState } from "react";
import { Button, Col, Container, Row, Stack, Toast, ToastContainer } from "react-bootstrap";
import { type CartContextType, foodList, type ToastItem } from "../utils/Food";
import ShopCard from "./ShopCard";
import "../utils/WP.css"
import { useOutletContext } from "react-router-dom";

export default function Shop() {

    const { cart, setCartHelper, changeLbs } = useOutletContext<CartContextType>();

    const [toastArr, setToastArr] = useState<ToastItem[]>([])

    function showToast(target: ToastItem) {
        setToastArr(prev => [...prev,target])
        setTimeout(() => {
            setToastArr(prev => 
                prev.map(toast => 
                    toast.message === target.message ? {...toast, show: true} : toast
                )
            )            
        }, 25)
    }
    function unShowToast(target: ToastItem) {
        setToastArr(prev => 
                prev.map(toast => 
                    toast.message === target.message ? {...toast, show: false} : toast
                )
            )   
        setTimeout(() => {
            setToastArr(prev => 
                prev.filter(toast => 
                    toast.message !== target.message))
        }, 25)
    }

    const currentDate = new Date("2025-08-06T00:00:00-05:00");
    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

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
        const cartItem = cart.find(item => item.food.name === name)
        if(cartItem && cartItem.lbs === amount) {
            return
        }
        if(cartItem && cartItem.lbs !== amount) {
            message = "Changed "+name+" amount to "+amount+plural
            changeLbs(cartItem, amount)
            showToast({message: message, show: false})
            return
        }
        setCartHelper({
                food: foodItem,
                lbs: amount
        })
        showToast({message: message, show: false})

        console.log(toastArr)
    }

    return (
        <Container>
            <div className="d-flex justify-content-between m-3 border-bottom flex-wrap">
                <Stack direction="horizontal" gap={3}>
                    <h1 className="text-start world-peas-font">Produce</h1>
                    <p className="mt-4"><span className="fw-medium">Fresh</span> — {monthNames[currentDate.getMonth()]} {currentDate.getDay()+","} {currentDate.getFullYear()}</p>
                </Stack>
                <Stack direction="horizontal" gap={3} className="mt-4 mb-4 ms-auto" >
                    <Button size="sm" className="fw-semibold wp-btn" variant="success">Default</Button>
                    <Button size="sm" className="fw-semibold" variant="light">A-Z</Button>
                    <Button size="sm" className="fw-semibold" variant="light">List View</Button>
                </Stack>
            </div>

            <Row className="me-3">
                {foodList.map((food, index) => (
                    <Col xs={"auto"} key={index} className="mt-5">
                        <ShopCard food={food} index={index} addToCart={addToCart}/>
                    </Col>
                ))}
            </Row>

            <ToastContainer position="bottom-end" className="p-3 mobile-bottom-toast">
                {toastArr.map((toast, index) => (
                    <Toast key={index} 
                    onClose={() => unShowToast(toast)}
                    show={toast.show}
                    >
                        <Toast.Header>
                            <strong className="me-auto">Produce Added</strong>
                        </Toast.Header>
                        <Toast.Body>{toast.message}</Toast.Body>
                    </Toast>
                ))}
            </ToastContainer>
        </Container>
    );
}