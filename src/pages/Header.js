import { Navbar, NavbarBrand, } from "reactstrap"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.jpg"

const Header = () => {

    return (
        <div>
            <Navbar color="light" light expand="md" className="navbar">
                <div>
                    <NavbarBrand href="/"><img src={logo} className="logo" alt="logo" /></NavbarBrand>
                </div>
                <div>
                    <div className="navlink-container">
                        <div>
                            <Link to="/login" className="nav-link">Login</Link>
                        </div><div>
                            <Link to="/sign-up" className="nav-link">Sign up</Link>
                        </div>
                    </div>

                </div>
            </Navbar >

        </div >
    )
}
export default Header