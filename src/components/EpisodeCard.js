import React, { useState } from 'react';
import { StyledEpisodeCard, StyledEpisodeCharecersBox, StyledEpisodeCharecers, StyledEpisodeCardBody, StyledEpisodeCardBodyContent, StyledEpisodeCardTitleBox } from './styled/EpisodeCard.styled'
import { StyledFlex } from '../components/styled/Flex.styled';

export default function EpisodeCard({ data, size, hideColumn, preferredOrder }) {
    let episodeImgArr = ['/episode1.jpg', '/episode2.jpg', '/episode3.jpg']
    let getRandomEpisodeImg = (arr)=>{
            return arr[Math.floor((Math.random()*arr.length))];
    }

    return (
        <>
            {
                data && (<StyledEpisodeCard size={size}>
                    <StyledEpisodeCardBody>
                        <img src={getRandomEpisodeImg(episodeImgArr)} alt='' />
                        <StyledEpisodeCardTitleBox>

                            <div className='episode-number'>Episode {data.episode}</div>
                            <div className='episode-title'>{data.title}</div>
                        </StyledEpisodeCardTitleBox>

                        <StyledEpisodeCardBodyContent>
                            <StyledFlex>
                                <div>{data.series}</div>
                                <div style={{marginLeft:'auto'}}>{data.air_date}</div>
                            </StyledFlex>
                            <StyledEpisodeCharecersBox>
                                {data.charactersDetails.map(char=>{
                                    return (
                                        <>
                                        {char && (
                                        <StyledEpisodeCharecers>
                                            <img src={char?.img} />
                                         <label>{char?.name}</label>
                                        
                                     </StyledEpisodeCharecers>
                                     )}
                                     </>
                                    )
                                })}
                            </StyledEpisodeCharecersBox>
                        </StyledEpisodeCardBodyContent>
                    </StyledEpisodeCardBody>
                </StyledEpisodeCard>
                )
            }

        </>
    )
}