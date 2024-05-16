import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header/Header';
import Carousel from '../components/carousel/Carousel';
import Footer from "../components/Footer/Footer";
import './Home.css';

interface HomeProps {

};

const Home: React.FC<HomeProps> = () => {
    return (
        <>
        <Header title="Jacob Wieler" />
        <Container fluid>
                <Row style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="backgroundImage" style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div className="scrim">
                            <h1 className="name">Jacob Wieler</h1>
                            <h4 className="name">Software Engineer</h4>
                        </div>
                    </div>
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center'}}>
                    <Col style={{ maxWidth: '600px'}}>
                        <Carousel />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;