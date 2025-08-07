import { Button, Card, Stack } from "react-bootstrap";
import { round, type CartItem } from "../utils/Food";

interface SumCardProps {
    cartContent: CartItem[]
}

export default function SummaryCard({cartContent}: SumCardProps) {

    const subTotal = round(cartContent.reduce((sum, item) => 
        (sum + item.food.cost * item.lbs), 0
    ))
    const tax = round(subTotal * 0.0625)
    const total = round(subTotal+tax)
    
    return (
        <Card className="mt-5">
            <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <Card.Subtitle className="mt-4">
                    <Stack gap={4}>
                        <div className="d-flex justify-content-between">
                            Subtotal <span>${subTotal}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            Shipping <span>{"Free!"}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            Tax  <span>${tax}</span>
                        </div>
                        <div className="fw-bold d-flex justify-content-between">
                            Total  <span>${total}</span>
                        </div>
                        <Button variant="success" className="wp-btn">
                            <Stack direction="horizontal" className="fw-medium">
                                Continue to payment
                                <i className="fa-solid fa-arrow-right ms-auto"/>
                            </Stack>
                        </Button>     
                    </Stack>
                </Card.Subtitle>
            </Card.Body>
        </Card>
    )
}