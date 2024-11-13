import { useState, useEffect } from 'react';
import LogoButton from './LogoButton';
import { Container, Col, Row } from 'react-bootstrap';
import RecentDiscussionButton from './RecentDiscussionButton';
import ShuffleButton from './ShuffleButton';
import SearchBox from './SearchBox';
import ProfileButton from './ProfileButton';
import RecentChangeButton from '../common/RecentChangeButton';
import styled from 'styled-components';

const HeaderContainer = () => {
    return (
        <div className='header'>
            <StyledContainer>
                <Row>
                    <Col md={2}>
                        <LogoButton variant="secondary"></LogoButton>
                    </Col>
                    <Col md={2}>
                        <RecentChangeButton></RecentChangeButton>
                    </Col>
                    <Col md={2}>
                        <RecentDiscussionButton></RecentDiscussionButton>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={1}>
                        <ShuffleButton></ShuffleButton>
                    </Col>
                    <Col md={3}>
                        <SearchBox></SearchBox>
                    </Col>

                    <Col md={1}>
                        <ProfileButton></ProfileButton>
                    </Col>
                </Row>
            </StyledContainer>
        </div>
    );
}

const StyledContainer = styled(Container)`
  max-width : 1500px;
  width : 100%;
`

export default HeaderContainer;