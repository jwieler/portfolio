import React from "react"
import Header from "../components/Header/Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import './About.css';

interface AboutProps {

};

const About: React.FC<AboutProps> = () => {
    return (
        <>
            <Header title="Jacob Wieler" />
            <br />
            <Container fluid >
                <Row className="row" style={{height: '100vh', display: 'flex', justifyContent: 'center'}}>
                    <Col xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                About Me
                            </Card.Title>
                            <p>Hi! My name is Jacob Wieler. I am a Software Engineer by day, and a _insert_cool_thing_here by night.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eu nulla at efficitur. In fermentum urna magna, at lacinia metus dapibus eu. Praesent aliquet suscipit dictum. Fusce at metus at nisi vulputate sollicitudin. Maecenas fermentum fringilla vehicula. Aliquam nunc arcu, dapibus id ante a, cursus pellentesque velit. Integer ornare cursus nulla id semper. Phasellus diam nunc, molestie nec fermentum a, vehicula ac velit. Fusce maximus egestas felis in elementum. Ut pulvinar nunc vel ligula semper mollis. Curabitur rhoncus leo nisl, id ullamcorper sem elementum nec.</p>

                            <p>Cras et enim sed ex convallis condimentum. Praesent quis elementum lectus, eget pretium libero. Nullam lectus sem, dictum sit amet finibus non, venenatis ac leo. Duis porta finibus consectetur. Quisque convallis eget augue vel efficitur. Maecenas sit amet erat magna. Donec vitae dolor pulvinar, fermentum eros sed, gravida ipsum. Morbi imperdiet nunc at purus accumsan, eget imperdiet dui pharetra. Morbi ut turpis convallis, rhoncus mauris quis, laoreet erat. Integer consequat lacus vitae augue pretium tincidunt.</p>

                            <p>In fermentum odio sed eros elementum vestibulum. Maecenas felis diam, tincidunt ac elit non, sollicitudin accumsan enim. Fusce sed vulputate ex, ac porttitor velit. Nam pulvinar consequat tellus non viverra. Pellentesque sem orci, congue in elementum vel, ultrices vel justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean volutpat mollis libero sit amet fringilla. Donec ullamcorper justo ut nunc varius, non fringilla mauris elementum. Pellentesque placerat dolor non lobortis gravida. Fusce venenatis et metus at pretium. Aliquam quis sapien sollicitudin, interdum massa a, iaculis nibh. Curabitur sed eros euismod, bibendum massa varius, posuere neque. Nunc laoreet urna lorem, at eleifend diam dignissim in. Aenean rutrum convallis nisi, vitae ultricies lectus malesuada vel.</p>

                            <p>Morbi ac lobortis metus. Maecenas id tincidunt justo. Etiam sed erat ut sapien aliquam congue. Etiam luctus laoreet massa, nec faucibus tortor hendrerit ultricies. Praesent blandit eget ipsum facilisis rutrum. Fusce pretium elit sit amet arcu egestas, vel faucibus sapien iaculis. Phasellus turpis ante, cursus in faucibus at, accumsan quis dui. Nam consectetur ultrices augue, ultrices suscipit sem porttitor id.</p>

                            <p>Nam pharetra id eros ut sodales. In hac habitasse platea dictumst. Etiam ullamcorper iaculis molestie. Aenean vehicula vel eros id tristique. Integer ut diam tincidunt ligula egestas finibus. Sed ligula ante, fermentum ac purus quis, feugiat lobortis risus. Vestibulum laoreet ligula non tempor faucibus. Fusce nec condimentum nibh, sodales hendrerit odio. In nec condimentum enim, faucibus vehicula ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in eleifend metus, non convallis metus.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
        
    );
}

export default About;