import React from "react"
import Header from "../components/Header/Header";
import { Accordion, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import './About.css';
import GenericCard from "../components/TextCard/GenericCard";
import Footer from "../components/Footer/Footer";
import Resume from "../assets/Resume.pdf";

interface AboutProps {

};

const ABOUT_ME_TEXT = `My name is Jacob Wieler, I am a Software Engineer by day, and an athlete, gamer, and music nerd by night!
I love learning new things and am passionate about technology. My current fascination is AI, as I am working as a Technical Lead at a startup called <a href="https://promptcore.ai">Prompt Core</a>. We focus on building tools to help anyone harness the power of generative AI.
As the Technical Lead, I design, review, and develop our systems. We make use of many emerging technologies including: Chat-GPT, DALL-E, and Azure Promptflow. On top of that, we containerize our proprietary AI workflows and deploy them to a kubernetes cluster to ensure scalability and availability.
Aside from work, I enjoy playing ball hockey, beach volleyball, going to the gym, going on hikes, and listening to music! <a href="https://open.spotify.com/user/01zd666oc7ajovj95nf1b7aqs?si=7282bec4636b4ad9">Check me out on Spotify</a> and see what I'm listening to, maybe you'll hear something you like!
`;

const EXPERIENCE_TEXT = `I have over 2 years of Professional Software Engineering experience. I started out my career at <a href="https://adknown.com">Adknown</a> where I worked as part of an agile team and learned a lot about being a well rounded Software Engineer. I quickly developed my skills and eventually found myself as Technical Lead at Prompt Core, where I am currently working.
I have learned so much along the way, but I am always looking forward to learning new skills and meeting new people. See more about my experience <a href="/experience">here</a>, or take a look at my <a href="${Resume}">resume</a>.`;

const SKILL_TEXT = `As a fullstack Software Engineer, I have developed many skills over the years. Take a look at a few of them down below!`

const About: React.FC<AboutProps> = () => {
    return (
        <>
            <Header title="Jacob Wieler" />
            <Container fluid style={{ marginTop: '70px', minHeight: '100vh'}}>
                <Row className="petals" style={{display: 'flex', justifyContent: 'center', alignContent: 'flex-start', height: '100%'}}>
                    <Col xs={12} style={{ marginBottom: '10px'}}>
                        <GenericCard title="About Me" text={ABOUT_ME_TEXT} />
                    </Col>
                    <Col xs={12} style={{ marginBottom: '10px'}}>
                        <GenericCard title="Experience" text={EXPERIENCE_TEXT} />
                    </Col>
                    <Col xs={12}>
                        <GenericCard title="Skills" text={SKILL_TEXT}>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Frontend</Accordion.Header>
                                    <Accordion.Body>
                                        I have worked extensively with the following frontend technologies:
                                        <br />
                                        <ListGroup variant='flush'>
                                            <ListGroupItem key="react">
                                                <strong>React.js - 3 years</strong>
                                                <br />
                                                ⦿ Developed professional web application interfaces for stakeholders and internal userbase of 40+ users.
                                                <br />
                                                ⦿ Migrated codebase from vanilla JS + jQuery over to React.js + Material UI drastically improving UI/UX for internal applications at Adknown.
                                                <br />
                                                ⦿ Co-managed standards committe for defining best practices when working with React.js for the development team at Adknown.
                                            </ListGroupItem>
                                            <ListGroupItem key="bootstrap">
                                                <strong>Bootstrap - 3 years</strong>
                                            </ListGroupItem>
                                            <ListGroupItem key="jquery">
                                                <strong>jQuery - 2 years</strong>
                                            </ListGroupItem>
                                            <ListGroupItem key="mui">
                                                <strong>Material UI - 2 years</strong>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Backend</Accordion.Header>
                                    <Accordion.Body>
                                        
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Cloud</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Languages</Accordion.Header>
                                    <Accordion.Body>
                                        I have a high level of proficiency with the following languages:
                                        <ListGroup variant="flush">
                                            <ListGroupItem>
                                                C
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                JavaScript
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                Python
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                PHP
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>APIs</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </GenericCard>
                    </Col>
                </Row>
            </Container>
            <Footer sticky="bottom"/>
        </>
    );
}

export default About;