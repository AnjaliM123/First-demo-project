import { Navbar, NavbarBrand, NavItem, NavLink, Collapse } from "reactstrap"

import logo from "../assets/images/logo.jpg"

const Header = () => {

    return (
        <div className="container">
            <Navbar color="light" light expand="md" className="navbar">
                <div>
                    <NavbarBrand href="/"><img src={logo} className="logo" alt="logo" /></NavbarBrand>
                </div>
                <div>
                </div>
                <div>
                    <div className="navlink-container">
                        <div>
                            <NavLink href="/Login" className="nav-link">Login</NavLink>
                        </div><div>
                            <NavLink href="/Sign-up" className="nav-link">Sign up</NavLink>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </Navbar >

        </div >
    )
}
export default Header