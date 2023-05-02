import styled from "styled-components";

export const StyledGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem; 
    width: 100%;
    .examples {
        display: grid;
        flex-direction: row;
        gap: 1rem;
        width: 100%;     
        .example{
            background-color: #562a5a;
            padding: 1rem;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 1rem;         
           
        }
        #normal-grid {
            display: grid;
            .header {

                grid-column: 1/8;
                grid-row: 1/1;
                background-color: tomato;
                text-align: center;
            }
            .sidebar{
                grid-column: 1/1;
                grid-row: 2/4;
                background-color: aqua;
                text-align: center;
            }
            .main{
                grid-column: 2/7;
                grid-row: 2/3;
                background-color: cadetblue;
                text-align: center;
                height: 30rem;
            }
            .right{
                grid-column: 7/8;
                grid-row: 2/3;
                background-color: #835fa0;
                text-align: center;
                height: 30rem;
            }
            .footer {
                grid-column: 2/8;
                grid-row: 3/4;
                background-color: darkcyan;
                text-align: center;

            }
        }
        #template-grid {       
            display: grid;
            gap: 1rem 1rem;
            grid-template-columns: 1fr 2fr 1fr;
              /* Examples!
                1fr 1fr
                minmax(10px, 1fr) 3fr
                repeat(5, 1fr)
                50px auto 100px 1fr
            */
            grid-template-rows: repeat(5, 1fr) ;
        }
        #autoflow-grid {
            display: grid;
            grid-template-columns:  repeat(5,auto);
            grid-template-rows: repeat(2, 20rem);;
            grid-auto-flow: row;          
            width: auto;
     
            .item-a {
                grid-column: 1;
                grid-row: 1 / 4;
            }

            .item-e {
                grid-column: 5;
                grid-row: 1 / 4;
            }
        }
 
        .grid-div{
            text-align: center;
        }
}
  
`
