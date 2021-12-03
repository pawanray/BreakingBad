import styled from "styled-components";

export const StyledEpisodeCard = styled.div`
    padding:0 5px;
    width:${({ size }) => size};
    margin-bottom:15px;
    position:relative;
}
`

export const StyledEpisodeCardTitleBox = styled.div`
position: absolute;
z-index: 3;
top: 0;
left: 0;
right: 0;
margin: 80px auto;
}
.episode-number{
    font-size: 35px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
}
.episode-title{
    font-size: 18px;
    color: #fff;
    text-align: center;
}
`

export const StyledEpisodeCardBody = styled.div`
background:#fff;
overflow:hidden;
border:1px solid #dcdcdc;
 &&:hover > img{
    transform: scale(1.1);
}
> img{
    max-height: 250px;
    min-height:250px;
    object-fit: fill;
    width: 100%;
    transform: scale(1);
transition: all 0.5s ease-in-out;
}
`

export const StyledEpisodeCardBodyContent = styled.div`
    text-align: center;
    padding: 15px;
    position: relative;
    bottom: 4px;
    color:#666;
    font-size:14px;
    `
export const StyledEpisodeCharecersBox = styled.div`
    height:200px;
    overflow:auto;
    margin-top:15px;
    `
export const StyledEpisodeCharecers = styled.div`
    display:flex;
    margin-top:10px;
    align-items:center;
    color:#888888;
    img{
        width:40px;
        height:40px;
        margin-right:10px;
        border-radius:50px;
    
    }
`