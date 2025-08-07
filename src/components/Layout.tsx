import type { ReactNode } from "react"
import { Button, Col, Container, Offcanvas, Row, Stack } from "react-bootstrap"
import "../utils/WP.css"

interface LayoutProps {
    children: ReactNode
    cartSize: number
    changeTab: (tab: string) => void

}

export default function Layout({children, changeTab, cartSize}: LayoutProps) {


    const headerButtons = (
        <Stack direction="horizontal" gap={4} >
            <Button variant="light" onClick={() => changeTab("shop")}>Shop</Button>
            <Button variant="light">Newstand</Button>
            <Button variant="light" onClick={() => changeTab("")}>Who we are</Button>
            <Button variant="light">My Profile</Button>
            <Button variant="success" onClick={() => changeTab("cart")} className="wp-btn">Basket ({cartSize})</Button>
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