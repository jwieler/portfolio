import React from "react"
import Header from "../components/Header/Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import './About.css';
import GenericCard from "../components/TextCard/GenericCard";

interface AboutProps {

};

const ABOUT_ME_TEXT = `My name is Jacob Wieler, I am a Software Engineer by day, and an athlete, gamer, and music nerd by night!\n
I love learning new things and am passionate about technology. I am currently interested in AI as I am working as a Technical Lead at a startup called <a href="https://promptcore.ai">Prompt Core</a>. We focus on generative AI and building tools to help anyone harness the power of generative AI.
`;

const EXPERIENCE_TEXT = `I have over 2 years of Professional Software Engineering experience. I started out my career at <a href="https://adknown.com">Adknown</a> where I worked as part of an agile team and learned a lot about being a well rounded Software Engineer. I quickly developed my skills and eventually found myself as Technical Lead at Prompt Core, where I am currently working.
I have learned so much along the way, but I am always looking forward to learning new skills and meeting new people. See more about my experience <a href="/experience">here</a>, or take a look at my <a href="/src/assets/Resume.pdf">resume</a>.`;

const About: React.FC<AboutProps> = () => {
    return (
        <div className="row" style={{ height: '100vh' }}>
            <Header title="Jacob Wieler" />
            <Container fluid style={{ maxWidth: '80%', marginTop: '50px'}}>
                <Row style={{display: 'flex', justifyContent: 'center', alignContent: 'flex-start', margin: '10px'}}>
                    <Col xs={12} style={{ marginBottom: '10px'}}>
                        <GenericCard title="About Me" text={ABOUT_ME_TEXT} />
                    </Col>
                    <Col xs={12}>
                        <GenericCard title="Experience" text={EXPERIENCE_TEXT} />
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default About;