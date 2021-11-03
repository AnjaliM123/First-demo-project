import { Navbar, NavbarBrand, NavItem, NavLink, Collapse } from "reactstrap"


const image = "https://res.cloudinary.com/ddcycgbwg/image/upload/v1635920933/logo_agxsqh.jpg"

const Header = () => {

    return (
        <div>
            <Navbar color="light" light expand="md">
                <div>
                    <NavbarBrand href="/"><img src={image} /></NavbarBrand>
                </div>
                <div>
                </div>
                <div>
                    <div>
                        <NavLink href="/Login">Login</NavLink>
                        <NavLink href="/Sign-up">Sign up</NavLink>
                    </div>
                </div>
            </Navbar>

        </div>
    )
}
export default Header