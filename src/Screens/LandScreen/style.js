import styled from './styled-component';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;  
`;

export const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    
    &:hover {
        background: ${props => props.primary ? "white" : "palevioletred"};
        color: ${props => props.primary ? "palevioletred" : "white"};
    }
`;