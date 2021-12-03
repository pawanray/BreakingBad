import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';
import { StyledHeader } from '../styled/Header.styled';

import StyledContainer from '../styled/Container.styled';
import { StyledFlex } from '../styled/Flex.styled';

import Navbar from './Navbar';

export default function AppHeader({ onSearch }) {
    const [serachQuery, setSearchQuery] = useState();
    const location = useLocation();
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledFlex style={{alignItems:'center'}}>
                    <div className='logo'>Breaking Bad</div>
                    <Navbar/>
                    {
                        location.pathname === "/" && (<div className='ml-auto'>
                        <input type='serach' onChange={(e) => setSearchQuery(e.target.value)} onKeyUp={(e) => onSearch(e.target.value)} placeholder="Search your favorite character" />
                    </div>)
                    }
                    
                </StyledFlex>
            </StyledContainer>
        </StyledHeader>
    )
}