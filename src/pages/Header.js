import {
  Navbar,
  NavbarBrand,
  Dropdown,
  Button,
  NavItem,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown,
} from "reactstrap";
import { NavDropdown } from "react-bootstrap";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { Cookie } from "../constants";
import { BiFace, BiLogOut } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { useHistory } from "react-router";
import {
  isUserAuthenticated,
  handleLogoutRedirect,
} from "../redux/helper/authHelper";
import { Redirect } from "react-router";
const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const history = useHistory();

  const username = Cookie.get("username");

  const Logout = () => {
    handleLogoutRedirect();
    history.push("/");
  };

  const toggle = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <React.Fragment>
    
        <div>
          <Navbar color="light" light expand="md" className="navbar">
            
            <div>
              <NavbarBrand href="/">
                <img src={logo} className="logo" alt="logo" />
              </NavbarBrand>
            </div>
            <div>
              {isUserAuthenticated() ?
               <div className="navlink-container">
               <div className="d-flex flex-row justify-content-end">
                   <div>
                     <Link to="/posts" className="nav-link">
                       posts
                     </Link>
                   </div>

                   <div>
                       <ButtonDropdown
                         className="dropdown"
                         toggle={toggle}
                         isOpen={isOpenDropDown}
                       >
                         <DropdownToggle caret className="button-container">
                           <BiFace className="icon" />
                           {username}
                         </DropdownToggle>
                         <DropdownMenu>
                           <DropdownItem className="navitem">
                             <BsPencil className="icon" /> Edit Profile
                           </DropdownItem>
                           <DropdownItem className="navitem" onClick={Logout}>
                             <BiLogOut className="icon" />
                             Logout
                           </DropdownItem>
                         </DropdownMenu>
                       </ButtonDropdown>
                     </div>
                 </div>
             </div>: <div>
                    <div className="navlink-container">
                      {/* {isUserAuthenticated() ? <Redirect to="/" /> : */}
                      <>
                        <div>
                          <Link to="/login" className="nav-link">
                            Login
                          </Link>
                        </div>
                        <div>
                          <Link to="/sign-up" className="nav-link">
                            Sign up
                          </Link>
                        </div>
                      </>
                    </div>
                    </div>}
                    
                  
          
                  
           
            </div>
            </Navbar>
  
    
        </div>
    </React.Fragment>
  );
};
export default Header;
