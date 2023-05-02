import { StyledBeforeAfter } from "./StyledBeforeAfter"

const BeforeAfter = () => {
    return (
        <StyledBeforeAfter>
            <h1 className="title">Before & After</h1>
            <p className="description">The ::before & ::after selectors inserts something before (or after) the content of each selected element(s). </p>
            <p> The content property within the css allows you to put a string attached to the element. </p>
            <div className="examples">
                <div className="column">
                    <div id="add-content" className="example">
                        <h3>Using content for add elements</h3>
                        <a href="http://google.com" className="link">Google</a>
                        <a href="http://facebook.com" className="link">Facebook</a>
                        <a href="http://instagram.com" className="link">Instagram</a>
                    </div>
                    <div id="bullets" className="example">
                        <h3>Using unique Bullets</h3>
                        <ul>
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <div id="chapter" className="example">
                        <h3>Main Axis and Cross Axis</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p >
                        <div className="show-more">
                            Show More
                        </div>
                    </div>
                    <div id="tree" className="example">
                        <h3>Create a Tree</h3>
                        <ul>
                            <li>First</li>
                            <li>Second</li>
                            <li>Third</li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledBeforeAfter>
    )
}
export default BeforeAfter