import styled from 'styled-components';

export const StyledSideBar = styled.nav`
    height: 95vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin: -3.5rem 0 0 0.7rem;
    padding: 1rem 1rem 1rem 1rem;
    background-color: #333639;
    box-shadow: 5px 5px 10px 0 #000000, -5px -5px 10px 0 #ffffff1f;
    border-radius: 0.6rem;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-110%)'};
    transition: transform 0.3s ease-in-out;
`;
