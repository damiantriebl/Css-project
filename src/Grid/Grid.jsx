import { StyledGrid } from "./StyledGrid"

const Grid = () => {
    const elementTemplate = 25;
    let templateElements = []
    for (var i = 0; i < elementTemplate; i++) {
        templateElements.push(<div key={i} className="grid-div" style={{ backgroundColor: backgroundColor() }} >div {i + 1}</div>);
    }


    function ramdonSize() {
        //create and object with height and width random
        let size = {
            width: Math.floor(Math.random() * 100) + 75,
            height: Math.floor(Math.random() * 100) + 75
        }
        return size
    }
    function backgroundColor() {
        // generate ramdom color
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 16).toString(16);
        }
        return color;
    }

    return (
        <StyledGrid>
            <h1 className="title">Grid </h1>
            <p> Gridbox is a way to organize the different Layouts, the main difference between Grid and grid is that Grid is unidirectional while grid is thought in two dimensions. </p>
            <div className="examples">
                <div className="example">
                    <h3>Normal Grid</h3>
                    <div id="normal-grid">
                        <div className="header"><h3>Header</h3></div>
                        <div className="sidebar">Sidebar</div>
                        <div className="main">Main content</div>
                        <div className="right">Right</div>
                        <div className="footer">Footer</div>
                    </div>
                </div>
                <div className="example">
                    <h3>Template Grid</h3>
                    <div id="template-grid">
                        {templateElements}
                    </div>
                </div>
                <div className="example">
                    <h3>Grid Auto Flow</h3>
                    <div id="autoflow-grid">
                        <div style={{ backgroundColor: backgroundColor() }} class="grid-div item-a">div-a</div>
                        <div style={{ backgroundColor: backgroundColor() }} class=" grid-div div-b">div-1</div>
                        <div style={{ backgroundColor: backgroundColor() }} class=" grid-div div-c">div-2</div>
                        <div style={{ backgroundColor: backgroundColor() }} class=" grid-div div-b">div-3</div>
                        <div style={{ backgroundColor: backgroundColor() }} class=" grid-div div-c">div-4</div>
                        <div style={{ backgroundColor: backgroundColor() }} class=" grid-div div-b">div-5</div>
                        <div style={{ backgroundColor: backgroundColor() }} class=" grid-div div-c">div-6</div>
                        <div style={{ backgroundColor: backgroundColor() }} class=" grid-div div-b">div-7</div>
                        <div style={{ backgroundColor: backgroundColor() }} class=" grid-div div-c">div-8</div>
                        <div style={{ backgroundColor: backgroundColor() }} class=" grid-div item-e">div-e</div>
                    </div>
                </div>
            </div>
        </StyledGrid >
    )
}
export default Grid