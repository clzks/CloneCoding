import styled from 'styled-components';

const MainContainer = () => {

    return (
        <StyledMainContainer></StyledMainContainer>
    )
}

const StyledMainContainer = styled.div`
    max-width :1200px;
    padding: 20px;
    background-color: #5B5B5B;
    border: 2px solid #343434;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin-right : 20px;
    flex : 3;
`;

export default MainContainer;