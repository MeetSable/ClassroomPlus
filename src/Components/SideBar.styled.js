import styled from 'styled-components';

export const StyledSideBar = styled.nav`
    display: flex;
    position: absolute;
    margin-top: -4rem;
    width: 20rem;
    height: 100vh;
    background-color: #333639;
    box-shadow: 0 0 5px #000;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
`;

