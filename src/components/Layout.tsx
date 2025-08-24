import { useState, type ReactNode } from "react"
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import "../utils/WP.css"
import { Link, useLocation } from "react-router-dom"

interface LayoutProps {
    children: ReactNode
    cartSize: number
}

export default function Layout({children, cartSize}: LayoutProps) {

    const [showCanvas, setShowCanvas] = useState(false)


    const headerButtons = (
            <Nav className="me-3 justify-content-end flex-grow-1" variant="underline" onClick={() => setShowCanvas(false)}>
                <Nav.Link as={Link} to="/shop" className={"mx-2 fst-normal"} active={location.pathname === "/shop"}>Shop</Nav.Link>
                <Nav.Link className="mx-2" disabled>Newstand</Nav.Link>
                <Nav.Link as={Link} to="/" className="mx-2" active={location.pathname === "/"}>Who we are</Nav.Link>
                <Nav.Link className="mx-2" disabled>My Profile</Nav.Link>
                <Nav.Link as={Link} to="/cart" className="basket-btn">Basket ({cartSize})</Nav.Link>
            </Nav>
    )

    const header = (
        <Navbar className="custom-header" expand={"lg"} bg="light" fixed="top">
            <Container fluid className="mt-2">
                <Navbar.Brand><h2 className="world-peas-logo fw-medium m-4" >World Peas</h2></Navbar.Brand>
                <Navbar.Toggle onClick={() => setShowCanvas(true)}/>
                <Navbar.Offcanvas placement="top" show={showCanvas} onHide={() => setShowCanvas(false)}>
                    <Offcanvas.Header><h2 className="world-peas-logo fw-medium" >World Peas</h2></Offcanvas.Header>
                    <Offcanvas.Body>
                        {headerButtons}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        

    )

    const footer = (
        <footer className="p-3">
            <p><span className="fst-italic">World Peas</span> originated from {" "} 
                <a href="https://www.figma.com/">Figma.com</a>
                <br/>
                Programmed by <a href="https://djbrowndev.com">DJ Brown</a>
                {" "}using <a href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
                <br/>Checkout the project on <a href="https://github.com/Boommage/World-Peas">Github</a>!
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