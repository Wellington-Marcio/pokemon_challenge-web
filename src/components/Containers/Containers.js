import { styled } from "styled-components";

export const ContainerNavbar = styled.div`
  background-color: #f5db13;
  height: 80px;
  display: flex;
  // border: 1px solid #F5DB13;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.75);
`;

export const ContainerLand = styled.div`
  display: flex;
  background: rgb(245, 219, 19);
  background: linear-gradient(
    0deg,
    rgba(253, 211, 45, 1) 0%,
    rgba(245, 219, 19, 1) 100%
  );
  height: 100vh relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
  box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.75);
`;

export const ContainerImg = styled.image`
  justify-content: center;
  align-items: center;
  max-width: max-content;
  width: 706px relative;
  height: 539px;
  top: 111px;
  left: 35px;
  margin-top: 40px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  width: 730px relative;
  height: 349px;
  top: 590px;
  left: 23px;
`;
export const ContainerListItem = styled.div`
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100% relative;
  height: 100vh;
  
`;
export const Content = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 max-width: max-content;
  width: 730px relative;
  height: 349px;

 
`;