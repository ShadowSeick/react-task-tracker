import { HashRouter, Link } from "react-router-dom";

const About = () => {
    return (
        <HashRouter>
            <h4>Version 1.0.0</h4>
            <Link to='/'>Go Back</Link>
        </HashRouter>
    )
}

export default About
