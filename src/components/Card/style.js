import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 420px auto;
  height: 250px absolute;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: -1px 2px 8px rgba(0, 0, 0, 1.2);
  margin: 10px;
  padding: 4px;
  cursor: pointer;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height:160px;
  width:220px;

`;
export const ContainerImg = styled.div`
  background: rgb(231,104,62);
background: linear-gradient(0deg, rgba(231,104,62,1) 2%, rgba(217,62,48,1) 100%);
  display: flex;
  justify-content: center;
  /* max-width: max-content; */
  width: 330px ;
  height:160px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

`;

// export const ContainerCard = styled.div`
// background-color: #f5d;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     max-width: max-content;
//     width: 150.54px;
// height: 146px;
// left: 24.97px;

//     `;
// export const Img = styled.img`
//     display: flex;
    

//     /* background-color: purple; */
//     justify-content: center;
//     align-items: center;
//     width: 210px;
//     height: 145px;
//     `;
