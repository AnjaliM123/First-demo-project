import { Navbar, NavbarBrand, NavItem, NavLink, Collapse } from "reactstrap"


const image = "https://res.cloudinary.com/ddcycgbwg/image/upload/v1635920933/logo_agxsqh.jpg"
//Header page
const Header = () => {

    return (
        <div className="container">
            <Navbar color="light" light expand="md" className="navbar">
                <div>
                    <NavbarBrand href="/"><img src={image} className="logo" clat="logo" /></NavbarBrand>
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
                </div>
            </Navbar >

        </div >
    )
}
export default Header