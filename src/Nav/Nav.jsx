import { StyledNav } from "./StyledNav"

const PseudoClass = () => {
    return (
        <StyledNav className="pseudo-class">
            <a href="/" className="hoverBtn">Pseudoclass</a>
            <a href="/beforeAfter" className="activeBtn">Before & After</a>
            <a href="/flex" className="visitedBtn">Flex</a>
            <a href="/Grid" className="visitedBtn">Grid</a>

        </StyledNav>
    )
}
export default PseudoClass