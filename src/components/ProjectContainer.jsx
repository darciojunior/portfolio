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
                    const { id, path, projectName, imagePath, icons, description, disabled } = project
                    return <ProjectCard key={id} path={path} projectName={projectName} imagePath={imagePath} icons={icons} description={description} disabled={disabled}/>
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
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 2rem;
    padding: 2rem;
}
@media (max-width: 640px) {
    .content {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
}
`
export default ProjectContainer

