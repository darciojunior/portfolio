import styled from "styled-components";
import { AsideContainer } from ".";

const Aside = () => {
    return (
        <Wrapper>
            <AsideContainer />
        </Wrapper>
    )
}

const Wrapper = styled.aside`
grid-area: aside;
padding: 3rem 3rem 3rem 1rem;

@media (max-width: 1280px) {
    padding: 1rem 3rem 3rem 3rem;
}

@media (max-width: 640px) {
    padding: 1rem;
}
`

export default Aside