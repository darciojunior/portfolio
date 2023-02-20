import { BsGithub, BsLinkedin } from 'react-icons/bs'
import styled from "styled-components";
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt='logo' className="logo" />
      <nav>
        <a href="https://github.com/darciojunior"><BsGithub size='2.5rem' /></a>
        <a href="https://www.linkedin.com/in/darcio-tanner-jr/"><BsLinkedin size='2.5rem' /></a>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
grid-area: header;
display: flex;
flex-direction: row;
justify-content:space-between;
background: linear-gradient(#000000 80%,rgba(0,0,0,0));
  .logo {
    height: 100px;
    padding: 1rem;
  }
  nav {
    display: flex;
    justify-content: center;
    padding: 3rem 5rem;
    gap: 2rem;
  }
  a {
    text-decoration: none;
    color:rgba(139, 60, 127, 0.7);
  }
  @media (max-width: 640px) {
    background: linear-gradient(#000000 80%,rgba(0,0,0,0));
    flex-direction: column;
    justify-content: flex-start;
    .logo {
      height: 100px;
    }
    nav {
      padding: 1rem 0;
    }
  }
  @media (max-width: 460px) {
    .logo {
      width: 80%;
      margin: 0 auto;
      padding: .5rem;
    }
    nav {
      padding: .5rem;
    }
  }
`
export default Header