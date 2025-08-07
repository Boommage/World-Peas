import type { ReactNode } from "react"
import { Button, Col, Container, Offcanvas, Row, Stack } from "react-bootstrap"
import "../utils/WP.css"
import { Link, useLocation } from "react-router-dom"

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

    const footer = (
        <footer className="p-3">
            <p><span className="fst-italic">World Peas</span> originated from {" "} 
                <a href="https://www.figma.com/">Figma.com</a>
                <br/>
                Programmed by <a href="https://github.com/Boommage">DJ Brown</a>
                {" "}using <a href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
                <br/>Checkout the project on <a href="https://github.com/Boommage">Github</a>!
            </p>
        </footer>
    )

    return (
        <>
            {header}
             <div style={{ height: "200px" }}/>
            <main>
                {children}
            </main>
            <div style={{ height: "250px" }}/>
            {useLocation().pathname === "/cart" ? "" : footer}
        </>
    )
}