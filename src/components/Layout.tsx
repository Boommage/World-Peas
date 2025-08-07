import type { ReactNode } from "react"
import { Button, Col, Container, Offcanvas, Row, Stack } from "react-bootstrap"
import "../utils/WP.css"
import { Link } from "react-router-dom"

interface LayoutProps {
    children: ReactNode
    cartSize: number
}

export default function Layout({children, cartSize}: LayoutProps) {


    const headerButtons = (
        <Stack direction="horizontal" gap={4} >
            <Link to="/shop"><Button variant="light">Shop</Button></Link>
            <Button variant="light">Newstand</Button>
            <Link to="/"><Button variant="light">Who we are</Button></Link>
            <Button variant="light">My Profile</Button>
            <Link to="/cart"><Button variant="success" className="wp-btn">Basket ({cartSize})</Button></Link>
        </Stack>
    )

    const header = (
        <Offcanvas show placement="top" backdrop={false} scroll={true} className="custom-header">
            <Container fluid className="mt-3">
                <Row>
                    <Col className="ms-5">
                        <h2 className="world-peas-logo fw-medium" >World Peas</h2>
                    </Col>
                    <Col className="text-end" xxl={"auto"} xl={"auto"}>
                        {headerButtons}
                    </Col>
                </Row>
            </Container>
        </Offcanvas>
    )

    return (
        <>
            {header}
             <div style={{ height: "200px" }}/>
            <main>
                {children}
            </main>
        </>
    )
}