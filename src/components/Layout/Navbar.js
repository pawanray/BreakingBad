import React from 'react'
import { StyledNavbar, StyledUl, StyledLi } from '../../components/styled/Navbar.styled';
import {
    NavLink,
} from "react-router-dom";
export default function Navbar() {
    return (
        <StyledNavbar>
            <StyledUl>
                <StyledLi>
                    <NavLink to="/" exact activeClassName='active'>Home</NavLink>
                </StyledLi>
                <StyledLi>
                    <NavLink to="/episodes" activeClassName='active'>Episodes</NavLink>
                </StyledLi>
            </StyledUl>
        </StyledNavbar>
    )
}
