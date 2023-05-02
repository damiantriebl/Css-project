import styled from 'styled-components';
import Congnizant from './assets/Congnizant';
import PseudoClass from './PseudoClass/PseudoClass';

export const StyledApp = styled.div`
    text-align: start; 
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    font-size: calc(10px + 2vmin);
    min-height: 100vh;
    .header {
        padding: 2rem ;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .container {
        padding: 2rem ;
        width: 100vw;

    }
`;


export const StyledLogo = styled(Congnizant)`
    align-self: start;
    fill: white;
        @media(prefers-color-scheme: light) {
            fill: #213547;
        }
`