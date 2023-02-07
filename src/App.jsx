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
  background: url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80) no-repeat center center fixed;
  background-size: cover;
  opacity: 0.8;
}
@media (max-width: 1280px) {
  display: grid;
  grid-template-rows: 15vh 1fr 500px;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'main' 'aside';
}
@media (max-width: 640px) {
  display: grid;
  grid-template-rows: 25vh 1fr 500px;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'main' 'aside';
}
`

export default App;
