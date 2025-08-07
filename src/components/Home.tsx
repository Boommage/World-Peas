import { Button, Col, Container, Row, Image, Figure, Stack} from "react-bootstrap";
import "../utils/WP.css"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Container fluid>
            <h1 className="fs-1 text-center mt-5 pt-5 pb-3 world-peas-font">
                We're
                <span className="fst-italic"> farmers</span>, 
                <span className="fst-italic"> purveyors</span>, and 
                <span className="fst-italic"> eaters </span> of 
                <br/>
                organically grown food.
            </h1>
            <Link to={"/shop"}><Button size={"lg"}variant={"success"} 
            className="position-absolute start-50 translate-middle mt-5 wp-btn">
                Browse our shop
                </Button></Link>

            <div className="my-5 py-5"/>
            <div className="my-5 py-5"/>

            <Row className="justify-content-center">
                <Col xs="auto">
                    <Image src="images/jonathan-kemper-1HHrdIoLFpU-unsplash 1.png" />
                </Col>
                <Col xs="auto" className="ms-4">
                    <Figure className="mt-5 pt-5">
                        <Figure.Image src="images/Stocksy_txp226f62b2aNe300_Medium_4582193 1.png"/>
                        <Figure.Caption>
                            <span className="fw-medium text-dark">Central California </span> 
                            — The person who grew these was located in Central California 
                            and, er, hopefully very well compensated.
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>

            <div className="my-5 py-4"/>

            <Row className="justify-content-center">
                <Col xs={"auto"}>
                    WHAT WE BELIEVE
                </Col>
                <Col xs={"auto"} md={4}>
                    <Stack gap={4}>
                        <p>We believe in produce. Tasty produce. Produce like;</p>
                        <p>Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. 
                            Jicamas. Cauliflowers. Brussels sprouts. Shallots. 
                            Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, 
                            too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. 
                            Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. 
                            Dill.
                        </p>
                        <p>What are we forgetting?</p>
                        <p>Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). 
                            Persian cucumbers, in addition to aforementioned “normal” 
                            cucumbers. Artichokes. Zucchinis. Pumpkins. Squash 
                            (what some cultures call pumpkins). Sweet potatoes and 
                            potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. 
                            Fruits of our labor (this website). Sorrel. Pineapple. Mango. 
                            Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. 
                            Chives. Corn. Endive. Escarole, which, we swear, we’re vendors 
                            of organic produce, but if you asked us to describe what 
                            escaroles are...
                        </p>
                    </Stack>
                </Col>
            </Row>

            <div className="my-5 py-5"/>
        </Container>
    )
}