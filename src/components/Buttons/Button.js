import { styled} from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  color: #fff;
  width: 100px;
  font-size: large;
  padding: 10px;
  border-width: 1px;
  border-color: #fff;
  margin: 3px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 8px  #2D8BBA;


  &:hover {
    background-color: transparent;
    
  }
`;
export const ButtonNav = styled(Button)`
 background-color: transparent;
  color: #fff;
  border:  8px;
  border-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #F9A01B;
  }
`;
 export const ButtonStyle = styled.button`
 background-color: orange;
 width: 180px;
 border-radius: 50%;
 color: white;
 
 `;

export const ButtonProduto = styled(Button)`
background-color: #242462;
 color: #fff;
 font-size: 15px;
 border:  8px;
 border-color: white;
 padding: 10px 20px;
 border-radius: 10px;
 height: 40px;
 cursor: pointer;

 &:hover {
   background-color: #F9A01B;
 }
`;

export const ButtonNovoproduto = styled(Button)`
background-color: #2a9df4;
 color: #fff;
 font-size: 15px;
 border:  8px;
 border-color: white;
 padding: 10px 20px;
 border-radius: 10px;
 height: 40px;
 cursor: pointer;
 

 &:hover {
   background-color: #F9A01B;
 }
`;


export const ButtonEnviar = styled(Button)`
background-color: #e8e337;
 color: #fff;
 font-size: 15px;
 border:  8px;
 border-color: none;
 padding: 10px 20px;
 border-radius: 10px;
 height: 40px;
 cursor: pointer;
 

 &:hover {
   background-color: #242462;
 }
`;


