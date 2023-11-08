import styled from 'styled-components';


export const Content = styled.div`
 

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 600px relative;
  height: 349px;
  `;

export const ContainerListItem = styled.div`
display: flex;

flex-direction: column;
justify-content: center;
align-items: center;
max-width: 100%;
width: 100% relative;
height: 100% relative;
grid-template-columns: repeat(3, 1fr);

`;