import { Button, Container } from "react-bootstrap";
import "../utils/WP.css"
import { Link, useOutletContext } from "react-router-dom";
import { type CartContextType } from "../utils/Food";
import { useEffect } from "react";

export default function Home() {

    const { deleteCart } = useOutletContext<CartContextType>();

    useEffect(() => {
        deleteCart()
    }, [])
    
    return (
        <Container fluid>
            <h1 className="fs-1 text-center mt-5 pt-5 pb-3 world-peas-font">
                Thanks for shopping with
                <span className="fst-italic"> us</span>!
                <br/>
            </h1>
            <Link to={"/"}><Button size={"lg"}variant={"success"} 
            className="position-absolute start-50 translate-middle mt-5 wp-btn">
                Return to home
                </Button></Link>
        </Container>
    )
}