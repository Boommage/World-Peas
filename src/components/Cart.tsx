import { Col, Container, Row, Stack } from "react-bootstrap";
import { type CartContextType} from "../utils/Food";
import CartCard from "./CartCard";
import SummaryCard from "./SummaryCard";
import "../utils/WP.css"
import { useOutletContext } from "react-router-dom";

export default function Cart() {
    
    const { cart } = useOutletContext<CartContextType>();

    return (
        <Container>
            <Row className="border-bottom">
                <Col xs={9}>
                    <Stack direction="horizontal" gap={3}>
                        <h1 className="text-start world-peas-font">Basket</h1>
                        <p className="mt-4">{cart.length} {(cart.length === 1 ? "item" : "items")}</p>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col xs={"auto"} md={8}>
                    <Stack gap={4} className="mt-5">
                        {cart.map((item, index) => {
                            return (
                                <CartCard cartData={item} key={index}/>
                            )})
                        }
                    </Stack>
                </Col>
                <Col>
                    {(cart.length === 0 ? "" : <SummaryCard cartContent={cart}/>)}
                </Col>
            </Row>
        </Container>
    )
}