import React from "react";
import styled from "styled-components";
export const StyledNavbar = styled.nav`
margin:0 10px 0 50px;
flex:1;
display:flex;
` 
export const StyledUl = styled.ul`
list-style:none;
margin:0;
padding:0;
display:flex;
align-items:center;
` 
export const StyledLi = styled.li`
 margin:20px;
 a{
  display:block;
  color:#fff;
  text-decoration:none;
  font-size:14px;
 }
 a.active{
   font-weight:bold;
 }
` 
