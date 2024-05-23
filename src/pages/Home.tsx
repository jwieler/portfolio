import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header/Header';
import GenericImageCarousel from '../components/carousel/Carousel';
import Footer from "../components/Footer/Footer";
import './Home.css';
import images from '../assets/portraits/images';

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
                            <div className="name-container">
                                <h1 className="name">Jacob Wieler</h1>
                                <h2 className="name title">Software Engineer</h2>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center', margin: '20px 0px'}}>
                    <Col style={{ maxWidth: '1000px'}}>
                        <GenericImageCarousel images={images} />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;