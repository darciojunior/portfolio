import { useEffect, useState } from "react"
import styled from "styled-components"
import { Icons } from '.'


const ProjectCard = ({ project }) => {
    const { path, projectName, imagePath, icons, description, disabled } = project

    const [isHovered, setisHovered] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
            if (windowWidth > 640) {
                setisHovered(false)
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    const toggleHover = () => {
        setisHovered(!isHovered)
    }

    return (
        <Wrapper>
            <a
                href={path}
                className={disabled ? 'project-image-container disabled' : 'project-image-container'}
                target='_blank' rel="noreferrer"

                {...(windowWidth >= 640) && {
                    onMouseEnter: () => {
                        toggleHover()
                    },
                    onMouseLeave: () => {
                        toggleHover()
                    },
                }}

                {...(windowWidth >= 640 && disabled && { onClick: (e) => e.preventDefault() })}

                {...(windowWidth < 640) && {
                    onClick: (e) => {
                        e.preventDefault()
                        toggleHover()
                    }
                }}
            >
                <img src={imagePath} alt="" />
                <div className={isHovered ? 'description-container hovered' : 'description-container'}>
                    <div>Linguagens usadas</div>
                    <div className="icons-container">
                        {icons.map((icon, index) => {
                            return <Icons icon={icon} key={index} spanText={icon.props.label} />
                        })}
                    </div>
                    <div>Descrição</div>
                    {description}
                    {(windowWidth < 640) && <button onClick={() => window.location.href = path} type="button" className="redirect-btn">Redirecionar ao projeto</button>}
                </div>
                <div className="project-name">{projectName}</div>
            </a>
        </Wrapper >
    )
}
const Wrapper = styled.div`
background-color: rgba(150, 150, 150, 0.6);
border-radius: .3rem;
@media (hover: hover) and (min-width: 640px){
    :hover>.project-image-container>img{
    transition-duration: .5s; 
    filter: blur(4px);
    transform: scale(1.1);
    }
}
.project-image-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: .3rem;
    text-decoration: none;
    height: 400px;
    position: relative;
}
img {
    max-width: 100%;
    object-fit: cover;
}
.project-image-container.disabled {
    cursor: default;
}
.description-container {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(36, 36, 36, 0.8);
    top: 0;
    left: 0;
}
.description-container.hovered {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
}
.description-container>div:nth-child(2n-1) {
    text-align: center;
    background-color: rgba(36, 36, 36, 0.6);
    padding: .2rem .5rem;
    border-radius: 50px;
    font-weight: 300;
    font-size: .9rem;
    color: #E7E7E7;
}
.icons-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: .5rem;
}
.icon {
    position: relative;
}
.icon:hover>span{
    display: block;
}
.icon>span {
    position: absolute;
    bottom: -1.5rem;
    display: none;
    padding: .2rem .5rem;
    border-radius: 50px;
    background-color: rgba(0, 0, 0);
    color: #E7E7E7;
    font-weight: 300;
    font-size: .9rem;
    z-index: 1;
}
.description {
    text-align: center;
    color: #E7E7E7;
}
.description>span {
    font-size: .8rem;
}
.description>span>object>a {
    text-decoration: none;
    font-style: italic;
    color: #bebebe;
}
.description>span>object>a:hover {
    color: #000;
    font-weight: bold;
}
.redirect-btn {
    position: absolute;
    top: .5rem;
    right: .5rem;
    padding: .5rem 1rem; 
    border-radius: 50px; 
    border: 1px solid #187DCF;
    background-color: #081F2D; 
    color: white; 
    font-size: .9rem; 
    cursor: pointer;
}
.project-name {
    position: absolute;
    text-align: center;
    bottom: .3rem;
    max-width: 14rem;
    padding: .5rem 1rem;
    border-radius: 50px;
    background-color: rgba(36, 36, 36, 0.6);
    color: #FFF;
}
@media (max-width: 460px) {
    .project-image-container {
        height: 300px;
    }
}
`
export default ProjectCard

