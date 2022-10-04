import React from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import { useState } from "react";


const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding:0 16px;
    position: fixed;
    top: 0;
    background-image: linear-gradient(to right,#a6349f, #fdd66f);
    border-bottom: 3px solid #fdd66f;

`;


const Menu = styled.nav`
        display: ${props => props.open ? 'flex' : 'none'};
        width: 100%;
        height: 100%;
        font-family: 'Open Sans';
        position: relative;
        flex-direction: column;
        align-items: center;
        top: 60px;
        padding: 8px;
        border-bottom: 3px solid #fdd66f;
      
        background-color: white;
        
     
        @media(min-width: 768px){
            display: flex;
            width: 100%;
            position: relative;
            border-bottom: none;
            background: none;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            left: initial;
            top: initial;
        }


`;

const Link = ({isActive ,children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    );
}



const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block ;
    text-align: center;
    box-sizing: border-box;
    font-weight:${props => props.isActive ? 'bold' : 'normal'} ;
    color: black;
    
`;

const MobileMenuIcon = styled.div`

        position: absolute;
        margin-top: 1.2%;
        margin-left: 88%;
        width: 25px;
        min-width: 25px;
        padding: 5px;
        

    >div{
        height: 3px;
        background: black;
        margin: 5px 0;
        width: 100%;
    }

    @media(min-width: 768px){
        display: none;
    }
`;

export function Header() {

    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <HeaderWrapper>
            <MobileMenuIcon onClick={()=> setMenuOpen(!menuOpen)} >
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to="/" isActive={pathname === '/'}>
                    Home
                </StyledLink>
                <StyledLink to="/login" isActive={pathname === '/login'} >
                    Login
                </StyledLink>
            </Menu>    
        </HeaderWrapper>
    );
}
