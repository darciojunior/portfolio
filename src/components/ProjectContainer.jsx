import styled from "styled-components";
import { ProjectCard } from ".";
import projects from "../utils/projects";

const ProjectContainer = () => {
    return (
        <Wrapper>
            <div className="title">
                PROJETOS
            </div>
            <div className="content-container">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project}/>
                })}
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
    font-size: 2.5rem;
    font-family: var(--headingFont);
    background: linear-gradient(340deg, #000000 50%, #404040 100%);
    background-size: cover;
    color: #FFF;
}
.content-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 2rem;
}
@media (max-width: 1480px) {
    .content-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 1280px) {
    .content-container {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (max-width: 1070px) {
    .content-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 760px) {
    .content-container {
        grid-template-columns: 1fr;
    }
}
@media (max-width: 460px) {
    .title {
        padding: 1rem;
    }
    .content-container {
        grid-template-columns: auto;
        padding: 1rem .5rem;
        grid-gap: 1rem;
    }
}
`
export default ProjectContainer

