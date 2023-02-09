import styled from "styled-components";
import { Header, Main, Aside } from './components'

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Aside />
    </Wrapper>
  );
}

const Wrapper = styled.section`
display: grid;
grid-template-rows: 15vh 1fr;
grid-template-columns: 1fr 30vw;
grid-template-areas: 'header header' 'main aside';
font-size: 1rem;
position: relative;

::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/images/background.jpg') no-repeat center center fixed;
  background-size: cover;
  opacity: 0.8;
}

//CSS dos icones
.icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1.5px solid #252525; 
    width: 40px;
    height: 40px;
}
.icon-html, .icon-css, .icon-javascript {
    background-color: rgba(170, 170, 170, 0.6);
}
.icon-react {
  background-color: #24618F;
}
.icon-mongoDB {
  background-color: #5D4037;
}
.icon-nodeJS {
  background-color: #78B743;
}
.icon-express {
  background-color: #393939;
}
@media (max-width: 1280px) {
  display: grid;
  grid-template-rows: 15vh auto 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'aside' 'main';
}
@media (max-width: 640px) {
  display: grid;
  grid-template-rows: 25vh auto 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'aside' 'main';
}
`

export default App;
