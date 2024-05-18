import { Container, Navbar, Row } from "react-bootstrap";
import './Footer.css';

interface FooterProps {
    sticky?: "top" | "bottom" | undefined,
};

const Footer: React.FC<FooterProps> = ({sticky}) => {
    return (
        <Navbar className="footer" sticky={sticky}>
            <Container style={{width: '10%', display: 'flex', justifyContent: 'center'}}>
                <Row xs={3}>
                    <Navbar.Brand href="https://github.com/jwieler" target="_blank">
                        <i className="fa-brands fa-github" />
                    </Navbar.Brand>
                </Row>
                <Row xs={3}>
                    <Navbar.Brand href="https://www.linkedin.com/in/jacob-wieler-95299519a/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </Navbar.Brand>
                </Row>
                <Row xs={3}>
                    <Navbar.Brand href="mailto:jacobwieler21@gmail.com" target="_blank">
                        <i className="fa-solid fa-envelope"></i>
                    </Navbar.Brand>
                </Row>
                <Row xs={3}>
                    <Navbar.Brand href="https://open.spotify.com/user/01zd666oc7ajovj95nf1b7aqs?si=7282bec4636b4ad9" target="_blank">
                        <i className="fa-brands fa-spotify"></i>
                    </Navbar.Brand>
                </Row> 
            </Container>
        </Navbar>
    )
};

export default Footer;