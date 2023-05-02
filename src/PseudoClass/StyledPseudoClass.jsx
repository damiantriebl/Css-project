import styled from "styled-components";

export const StyledPseudoClass = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 2rem;
    a {
     padding: 1rem ;
    }
    .examples {
        display: flex;
        flex-direction: row;
        gap: 3rem
    }
    .hoverBtn:hover {
        background-color: #17BFDD;
    } 
    .activeBtn:active {
        color: tomato;
        background-color: #17BFDD;
    } 
    .visitedBtn:visited {
        color: tomato;
        background-color: #17BFDD;
    } 
    .focusBtn:focus {
        color: greenyellow;
    } 
    .focus-withinBtn {
        padding: 1rem;
        background: #3b6f79;
    }
    .focus-visibleBtn:focus-visible {
        outline: 4px solid darkorange; 

    }
    .focus-withinBtn:focus-within {
        color: greenyellow;
        background: cyan;

    } 
    .targetBtn:target {
        color: tomato; 
    }
    .grid-element {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
    .example {
        background-color: #562a5a;  
        padding: 1rem;
        border-radius: 1rem;
        img {
            border-radius: 1rem;
            text-align: center;
        }
        #first-last {
            li:first-child {
                color: tomato;
            }
            li:last-child {
                color: cyan;
            }
        }
        #not-element {
            li:not(.special) {
                color: tomato;
            }           
        }
        #adyacent-sibling {
            li:first-of-type + p {
                color: tomato;
            }         
        }
        #direct-children {
            gap:1rem;
            p > span {
                color: tomato;
            }      
            b {
                font-weight: 600;
            }   
        }
    }
    .example:has(.error) {
        background-color: tomato;  
    }
`