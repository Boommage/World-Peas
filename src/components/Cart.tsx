import { Col, Container, Row, Stack } from "react-bootstrap";
import { type CartItem } from "../utils/Food";
import CartCard from "./CartCard";
import SummaryCard from "./SummaryCard";
import "../utils/WP.css"


interface CartProps {
    cartContent: CartItem[]
    changeLbs: (target: CartItem, newLbs: number) => void
    removeItem: (target: CartItem) => void
}

export default function Cart({cartContent, changeLbs, removeItem}: CartProps) {
    
    return (
        <Container>
            <Row className="border-bottom">
                <Col xs={9}>
                    <Stack direction="horizontal" gap={3}>
                        <h1 className="text-start world-peas-font">Basket</h1>
                        <p className="mt-4">{cartContent.length} {(cartContent.length === 1 ? "item" : "items")}</p>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col xs={"auto"} md={8}>
                    <Stack gap={4} className="mt-5">
                        {cartContent.map((item, index) => {
                            return (
                                <CartCard cartData={item} key={index} changeLbs={changeLbs} removeItem={removeItem}/>
                            )})
                        }
                    </Stack>
                </Col>
                <Col>
                    {(cartContent.length === 0 ? "No Content" : <SummaryCard cartContent={cartContent}/>)}
                </Col>
            </Row>
        </Container>
    )
}