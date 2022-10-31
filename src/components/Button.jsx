import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid red;
  background-color: ${(props) =>
    props.variant === "outline" ? "#blue" : "green"};
  font-size: x-large;
  text-align: center;    
  display: inline-block;
  cursor: pointer;
  color: ${(props) => (props.variant === "outline" ? "#green" : "blue")};
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background-color: #000;
    color: #e4e4e4;
    transition: all 0.4s ease-in-out;
    padding: 10px 300px 10px 300px;
    border: 0;
  }
`;
export default StyledButton; 
export const FancyButton = styled(StyledButton)`
background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
border: none;
`
export const DarkButton = styled(StyledButton)`
    border: 2px solid ${(props)=>props.theme.dark.primary};
    background-color: 2px solid ${(props)=>props.theme.dark.primary};
    color:${(props)=>props.theme.dark.text}
`