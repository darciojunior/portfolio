import styled from "styled-components";
import { ProjectContainer } from ".";

const Main = () => {
    return (
        <Wrapper>
            <ProjectContainer />
        </Wrapper>
    )
}

const Wrapper = styled.main`
grid-area: main;
padding: 3rem 1rem 3rem 3rem;

@media (max-width: 1280px) {
    padding: 1rem 3rem 3rem 3rem;
}

@media (max-width: 640px) {
    padding: 1rem;
}
@media (max-width: 460px) {
    padding: .5rem;
}
`

export default Main