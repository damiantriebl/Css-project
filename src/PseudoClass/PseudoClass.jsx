import { StyledPseudoClass } from "./StyledPseudoClass"
import Position from '../assets/relationalpseudos2.webp'
import Dropdown from 'react-dropdown';
import './DropdownStyle.css'

const PseudoClass = () => {
    let liQuantity = 9;
    let hasQuantity = 4;
    let liElements = [];
    let hasElements = [];

    for (var i = 0; i < liQuantity; i++) {
        if (i === 3) {
            liElements.push(<li key={i} className="special"  >Link {i + 1}</li>);

        } else {
            liElements.push(<li key={i} >Link {i + 1}</li>);
        }
    }
    for (var i = 0; i < hasQuantity; i++) {
        if (Math.random() * 10 < 3) {
            hasElements.push(<li key={i} className="error"  >Link error!</li>);

        } else {
            hasElements.push(<li key={i} >Link {i + 1}</li>);
        }
    }
    const options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two', className: 'myOptionClassName' },
        {
            type: 'group', name: 'group1', items: [
                { value: 'three', label: 'Three', className: 'myOptionClassName' },
                { value: 'four', label: 'Four' }
            ]
        },
        {
            type: 'group', name: 'group2', items: [
                { value: 'five', label: 'Five' },
                { value: 'six', label: 'Six' }
            ]
        }
    ];
    return (
        <StyledPseudoClass className="pseudo-class">
            <h1 className="title">Pseudo Classes & Selectors</h1>
            <p className="description">is a keyword added to selectors that specifies a special state of the selected item.</p>
            <div className="examples">
                <a href="#" className="hoverBtn">hover</a>
                <a href="#" className="activeBtn">active</a>
                <a href="/#visited" className="visitedBtn">visited</a>
                <a href="#" className="focusBtn">focus</a>
                <a href="#" className="focus-visibleBtn">focus Visible</a>
                <div href="#" className="focus-withinBtn">focus Within <a href="#">with a button</a></div>
                <a id="target" href="/#target" className="targetBtn">target</a>
            </div>
            <div className="grid-element">
                <div className="example">
                    <h3>First & Last</h3>
                    <div id="first-last">
                        <ul>
                            {liElements}
                        </ul>
                    </div>
                </div>
                <div className="example">
                    <h3>Position Number</h3>
                    <img src={Position} />
                </div>
                <div className="example">
                    <h3>not pseudo selector</h3>
                    <div id="not-element">
                        <ul>
                            {liElements}
                        </ul>
                    </div>
                </div>
                <div className="example">
                    <h3>Check Has() Element</h3>
                    <div>
                        <ul>
                            {hasElements}
                        </ul>
                    </div>
                </div>
                <div className="example">
                    <h3>Adyacent Siblings +</h3>
                    <div id="adyacent-sibling">
                        <ul>
                            <li>Link 1</li>
                            <p>paragrap 1!</p>
                            <p>paragrap 2!</p>
                            <p>paragrap 3!</p>
                            <li>Link 2</li>
                            <p>paragrap 4!</p>
                            <li>Link 3</li>
                            <span>span 1</span>
                            <p>paragrap 5!</p>
                        </ul>

                    </div>
                </div>
                <div className="example">
                    <h3>Direct Children ></h3>
                    <div id="direct-children">
                        <p>Paragraph <b><span>whit span </span></b>
                            but have a diferents <span>span!</span></p>
                        <p>Paragraph <span>whit span</span></p>

                    </div>
                    <h3>ComboBox (addtional feature)</h3>
                    <div id="direct-children">
                        <p>How to debug a comboBox?</p>
                        <Dropdown
                            arrowClosed={<span className="arrow-closed" />}
                            arrowOpen={<span className="arrow-open" />}
                            options={options}
                        />
                    </div>
                </div>
            </div>
        </StyledPseudoClass>
    )
}
export default PseudoClass