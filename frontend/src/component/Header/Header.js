import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <h1>Header</h1>
            <Link to="/test1">Test1</Link>
            <Link to="/test2">Test2</Link>
        </>
    )
}
export default Header;