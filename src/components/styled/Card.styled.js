import styled from "styled-components";

export const StyledCard = styled.div`
 padding:0 3px;
width:${({ size }) => size};
margin-bottom:3px;
}
`
export const StyledCardBody = styled.div`
background:#fff;
overflow:hidden;
&&:hover img{
    transform: scale(1.1);
}
img{
    max-height: 250px;
    min-height:250px;
    object-fit: fill;
    width: 100%;
    transform: scale(1);
transition: all 0.5s ease-in-out;

}
`

export const StyledCardBodyContent = styled.div`
    background: #000;
    color: #fff;
    text-align: center;
    padding: 15px;
    position: relative;
    bottom: 4px;
`