import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
background:${({theme})=>theme.colors.header};
color: #fff;
margin-bottom:15px;
input[type='serach']{
    width: 400px;
    border-radius: 50px;
    padding: 10px 20px;
    margin: 10px 0;
}
` 