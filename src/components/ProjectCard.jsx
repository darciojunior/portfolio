import styled from "styled-components"
import { Icons } from '.'


const ProjectCard = ({ path, projectName, imagePath, icons, description, disabled }) => {
    return (
        <Wrapper>
            <a href={path} className={disabled ? "project-image-container disabled" : "project-image-container"} target='_blank' rel="noreferrer">
                <img src={imagePath} alt="" />
                <div className="project-name">{projectName}</div>
            </a>
            <div className="description-container">
                <div>Linguagens usadas</div>
                <div className="icons-container">
                    {icons.map((icon, index) => {
                        return <Icons icon={icon} key={index} />
                    })}
                </div>
                <div>Descrição</div>
                {description}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
background-color: rgba(150, 150, 150, 0.6);
border-radius: .5rem;
:hover>.project-image-container>img{
    transition-duration: .5s; 
    filter: grayscale(0);
    transform: scale(1.1);
}

.project-image-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: .5rem .5rem 0 0;
    border-bottom: solid;
    text-decoration: none;
    height: 300px;
    margin-bottom: .2rem;
    position: relative;
}
.project-image-container:hover {
    cursor: pointer;
}
.project-image-container:hover>.project-name{
    background-color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
}
.project-image-container.disabled {
    pointer-events: none;
}
img {
    filter: grayscale(100)
}
.project-name {
    background-color: rgba(36, 36, 36, 0.6);
    color: #FFF;
    padding: .5rem 1rem;
    border-radius: 50px;
    position: absolute;
    bottom: 5px;
}
.description-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
    gap: .5rem;
}
.description-container>div:nth-child(2n-1) {
    background-color: rgba(36, 36, 36, 0.6);
    padding: .2rem .5rem;
    border-radius: 50px;
    font-weight: 300;
    font-size: .9rem;
    color: #E7E7E7;

}
span>a {
    text-decoration: none;
    font-style: italic;
    color: #b6b6b6;
}
span>a:hover {
    color: #000;
    font-weight: bold;
}
.icons-container {
    display: flex;
    justify-content: center;
    gap: .5rem;
}

.description {
    color: #E7E7E7;
    width: 100%;
}
span {
    font-size: .8rem;
}
@media (max-width: 640px) {
    img {
    filter: grayscale(0)
}
}
`
export default ProjectCard

