import styled from "styled-components";

const AsideContainer = () => {
    return (
        <Wrapper>
            <div className="title">
                ABOUT ME
            </div>
            <div className="content">
                <div className="texto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor explicabo iste id rerum fugiat. Quas, nemo. Temporibus qui consectetur amet quam esse nobis nisi eum. Itaque dolores nemo suscipit?
                </div>
                <div className="objetivo">
                    OBJETIVO
                    <div className="texto">
                        Adquirir experiência e conhecimento como desenvolvedor web.
                    </div>
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
.content {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
}
.texto {
    padding: 1rem;
    text-align: center;
    background-color: #DDD;
    color: #000;
}
.objetivo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #000;
    color: #FFF;
}
@media (max-width: 1280px) {
.content {
    flex-direction: row;
}
}
`
export default AsideContainer