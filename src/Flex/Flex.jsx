import { StyledFlex } from "./StyledFlex"
import FlexDirection from "../assets/flex-direction.webp"

const Flex = () => {
    let elementNormal = 15;
    let elementSpacing = 3;

    let normalBehavior = [];
    let diferentElements = [];
    let spacingElements = [];

    for (var i = 0; i < elementNormal; i++) {
        normalBehavior.push(<div key={i} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div {i + 1}</div>);
    }
    for (var i = 0; i < elementNormal; i++) {
        diferentElements.push(<div key={i} className="flex-div" style={{ backgroundColor: backgroundColor(), ...ramdonSize() }} >div {i + 1}</div>);
    }
    for (var i = 0; i < elementSpacing; i++) {
        spacingElements.push(<div key={i} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div {i + 1}</div>);
    }


    function ramdonSize() {
        //create and object with height and width random
        let size = {
            width: Math.floor(Math.random() * 100) + 75,
            //  height: Math.floor(Math.random() * 100) + 75

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
        <StyledFlex>
            <h1 className="title">Flex </h1>
            <p> Flexbox is a way to organize the different Layouts, the main difference between flex and grid is that flex is unidirectional while grid is thought in two dimensions. </p>
            <div className="examples">
                <div className="column">
                    <div className="example">
                        <h3>Normal Behavior (with wrap)</h3>
                        <div id="normal-behavior">
                            {normalBehavior}
                        </div>
                    </div>
                    <div className="example">
                        <h3>Normal Behavior Column (with wrap)</h3>
                        <div id="normal-behavior-column">
                            {normalBehavior}
                        </div>
                    </div>
                    <div className="example">
                        <h3>Justify Content</h3>
                        <div id="spacing">
                            {spacingElements}
                        </div>
                    </div>
                    <div className="example">
                        <h3>Flex Grow</h3>
                        <div id="grow">
                            <div key={1} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div 1</div>
                            <div key={2} className="flex-div flex-grow" style={{ backgroundColor: backgroundColor() }} >div 2</div>
                            <div key={3} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div 3</div>
                        </div>
                    </div>
                    <div className="example">
                        <h3>Flex Shrink</h3>
                        <div id="shrink">
                            <div key={1} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div 1</div>
                            <div key={2} className=" flex-grow" style={{ backgroundColor: backgroundColor() }} >div 2</div>
                            <div key={2} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div 2</div>

                            <div key={3} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div 3</div>
                        </div>
                    </div>
                    <div className="example">
                        <h3>Aling Self</h3>
                        <div id="aling-self">
                            <div key={1} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div 1</div>
                            <div key={2} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div 2</div>
                            <div key={3} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div 3</div>
                            <div key={4} className="flex-div self-unique" style={{ backgroundColor: backgroundColor() }} >div 4</div>
                            <div key={5} className="flex-div" style={{ backgroundColor: backgroundColor() }} >div 5</div>

                        </div>
                    </div>
                </div>
                <div className="column">
                    <div id="chapter" className="example">
                        <h3>Flex direction </h3>
                        <img src={FlexDirection} />
                    </div>
                    <div className="example">
                        <h3>Diferents Sizes</h3>
                        <div id="different-sizes">
                            {diferentElements}
                        </div>
                    </div>

                </div>
            </div>
        </StyledFlex>
    )
}
export default Flex