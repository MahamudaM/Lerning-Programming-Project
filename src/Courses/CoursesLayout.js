import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import RightSideNav from './RightSideNav/RightSideNav';

const CoursesLayout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                    <RightSideNav></RightSideNav>
                    </Col>
                    <Col lg="8">
                 
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CoursesLayout;