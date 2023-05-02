import styled from "styled-components";

export const StyledBeforeAfter = styled.div`
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
        .example{
            background-color: #562a5a;
            padding: 1rem;
            margin: 1rem;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            flex: 1;
            h3 {
                font-weight: 600;
            }
            p {
                font-size: medium;
            }
           
        }
    }
    #add-content {
        .link::after {
            content: " (" attr(href) " ) "
        }
    }
    #chapter {
        .show-more {
            text-align: center;
        }
        .show-more::before {
            content: '';
            background-color: #872c8f;
            display: inline-block;
            width: 20%;
            height: 0.3rem;   
            margin-right: 0.3rem;
            vertical-align: middle;
        }
        .show-more::after {
            content: '';
            background-color: #8f2c66;
            display: inline-block;
            margin-left: 0.3rem;
            width: 20%;
            height: 0.3rem;     
            vertical-align: middle;   
        }
    }    
    #bullets {
        li::before {
            content: "🤓";
            margin-right: 1rem;
            font-size: 2rem;
        }
    }
    #tree {
        line-height: 2.5rem;
        gap:1rem;
        li::before {
            content: "";
            border-left: 0.5rem solid grey;
            border-bottom: 0.5rem solid grey;
            display: inline-block;
            margin-right: 0.5rem;
            width: 2rem;
            height: 2.5rem;
            vertical-align: top;
            margin-top: -1rem; 
        }
    }
`