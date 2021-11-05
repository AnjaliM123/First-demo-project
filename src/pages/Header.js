import { Navbar, NavbarBrand, NavLink } from "reactstrap"

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
                            <NavLink href="/login" className="nav-link">Login</NavLink>
                        </div><div>
                            <NavLink href="/sign-=up" className="nav-link">Sign up</NavLink>
                        </div>
                    </div>

                </div>
            </Navbar >

        </div >
    )
}
export default Header