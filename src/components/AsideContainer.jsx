import styled from "styled-components";
import { html, css, javascript, react, mongoDB, nodeJS, express } from '../utils/icons'
import { Icons } from '.'

const AsideContainer = () => {
    return (
        <Wrapper>
            <div className="title">
                SOBRE MIM...
            </div>
            <div className="content-container">
                <div>
                <div className="content-title">Sobre mim</div>
                <div className="content">Formado em ciência da computação, tenho 26 anos e moro em Sumaré/SP. <br></br>Estou estudando programação por conta própria e através de cursos online e desenvolvendo um portfolio para praticar.</div>
                </div>
                <div>
                    <div className="content-title">Skills</div>
                    <div className="skills-icons">
                        <Icons icon={html} spanText='HTML5' />
                        <Icons icon={css} spanText='CSS' />
                        <Icons icon={javascript} spanText='Javascript' />
                        <Icons icon={react} spanText='React' />
                        <Icons icon={mongoDB} spanText='mongoDB' />
                        <Icons icon={nodeJS} spanText='Node.js' />
                        <Icons icon={express} spanText='Express.js' />
                    </div>
                </div>

                <div>
                    <div className="content-title">Próximos passos</div>
                    <div className="content">Desenvolver projetos com a Stack MERN para praticar e fixar o conhecimento adquirido de cursos e me tornar um desenvolvedor Fullstack!</div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
border-radius: 1rem;
background: rgba(30, 30, 30, 0.8);
.title {
    padding: 2rem;
    border-radius: 1rem 0.5rem 6rem 0;
    font-size: 1.5rem;
    font-family: var(--headingFont);
    background: linear-gradient(340deg, #000000 50%, #404040 100%);
    background-size: cover;
    color: #FFF;
}
.content-container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
}
.content-container > * {
    flex: 1;
}
.content-title {
    padding: .5rem;
    text-align: center;
    background-color: black;
    color: white;
    border-radius: .5rem .5rem 0 0;
}
.skills-icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: .5rem;
    gap: .5rem;
    background-color: rgba(150, 150, 150, 0.6);
    border-radius: 0 0 .5rem .5rem;
}
.icon {
    position: relative;
}
.icon:hover>span{
    display: block;
}
span {
    display: none;
    background-color: rgba(36, 36, 36, 0.6);
    padding: .2rem .5rem;
    border-radius: 50px;
    font-weight: 300;
    font-size: .9rem;
    color: #E7E7E7;
    position: absolute;
    bottom: -1.5rem;
    z-index: 1;
}
.content {
    text-align: center;
    background-color: rgba(150, 150, 150, 0.6);
    border-radius: 0 0 .5rem .5rem;
    padding: .5rem;
    color: #E7E7E7;
}
@media (max-width: 1280px) {
.content-container {
    flex-direction: row;
}
.content-container>div {
    display: flex;
    flex-direction: column;
}
.content, .skills-icons {
    height: 100%;
}
}
@media (max-width: 1030px) {
.content-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.content-container>div:first-child {
    grid-column: span 2;
}
}
@media (max-width: 640px) {
.content-container {
    display: flex;
    flex-direction: column;
}
}
`
export default AsideContainer