import "./App.css";
import StyledButton, { DarkButton } from "./components/Button";
import { FancyButton } from "./components/Button";
import {ThemeProvider,createGlobalStyle } from 'styled-components';
const theme={
  dark:{
    primary:'#000',
    text:'#fff',
  },
  light:{
    primary:'#fff',
    text:'#000',
  },
  fontFamily:'cursive',
}

const GlobalStyle = createGlobalStyle`
button{
  font-family: ${(props) => props.theme.fontFamily};
}
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <div div className="App">
      <StyledButton>Click</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Another</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton>Fancy One!</FancyButton>
      <div>
        <br />
      </div>
<DarkButton>UFFFFF!</DarkButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
