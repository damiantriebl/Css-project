import styled from "styled-components";

export const StyledFlex = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    gap: 2rem; 
    width: 100%;
    .examples {
        display: flex;
        flex-direction: row;
        width: 100%;
        .column {
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        .flex-div {
            width: 10rem;
            height: 5rem;
            text-align: center;
        }
        .example{
            background-color: #562a5a;
            padding: 1rem;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 1rem;
            img {
                border-radius: 1rem;
            }
            h3 {
                font-weight: 600;
            }
            p {
                font-size: medium;
            }
           
        }
    }   
    #normal-behavior{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        flex-wrap: wrap;
    }
    #normal-behavior-column {
        max-height: 30rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex-wrap: wrap;
    }
    #different-sizes {
        max-height: 30rem;
        display: flex;
        flex-flow: row wrap;
        -webkit-box-pack: center;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
    }
    #spacing {
        display: flex;
        flex-direction: row;
        background-color: tomato;
        justify-content: space-around;
  
        .flex-div {
            width: 10rem;
            height: 5rem;
            text-align: center;
        }
    }
    #grow {
        display: flex;
        flex-direction: row;
        background-color: tomato;
        justify-content: space-between;
        .flex-grow {
            flex-grow: 1;
        }
        .flex-div {
            width: 9rem;
            height: 5rem;
            text-align: center;
        }
    }
    #shrink {
        display: flex;
        flex-direction: row;
        background-color: tomato;
        justify-content: space-between;
        .flex-shrink {
            flex-shrink: 1;
            height: 5rem;
            text-align: center;
        }

        .flex-grow {
            flex-grow: 5;
            height: 5rem;
            text-align: center;
        }
    }
    #aling-self {
        display: flex;
        flex-direction: row;
        background-color: tomato;
        justify-content: space-around;
        height: 10rem;
        .flex-div {
           width: 5rem;
            text-align: center;
        }
        .self-unique {
            align-self: flex-end;
        }
    }
`
