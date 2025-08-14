import { Button, Card, Stack } from "react-bootstrap";
import { round, type CartItem } from "../utils/Food";
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";

interface SumCardProps {
    cartContent: CartItem[]
}

export default function SummaryCard({cartContent}: SumCardProps) {

    const subTotal = round(cartContent.reduce((sum, item) => 
        (sum + item.food.cost * item.lbs), 0
    ))
    const tax = round(subTotal * 0.0625)
    const total = round(subTotal+tax)

    const createCheckoutSession = useAction(api.checkout.createCheckoutSession);

    async function handleCheckout() {
        const { url } = await createCheckoutSession({ total });
        window.location.href = url!;
    }
    
    return (
        <Card className="mt-5">
            <Card.Body>
                <Card.Title className="fw-bold">Order Summary</Card.Title>
                <Card.Subtitle className="mt-4">
                    <Stack gap={4}>
                        <div className="d-flex justify-content-between">
                            Subtotal <span>${subTotal}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            Shipping <span>{"Free"}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            Tax  <span>${tax}</span>
                        </div>
                        <div className="fw-bold d-flex justify-content-between">
                            Total  <span>${total}</span>
                        </div>
                        <Button variant="success" className="wp-btn" onClick={handleCheckout}>
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