import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";



const PasswordInputWrapper = styled.div`
    display: flex;


`;

const ToggleBuuton = styled.div`
    height: 40px;
    border: 1px solid #eee;
    box-sizing: border-box;
    font-size: 0.9em;
    display: flex;
    padding: 8px;
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: gray;
    font-weight: blod;
    cursor: pointer;
    user-select: none;
    color: black;
`;




const PasswordInputStyled = styled(Input).attrs(() => ({
    type: 'password',
    placeholder: 'Password'
}))`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(true);

    return (
        <>
            <PasswordInputWrapper>
                <PasswordInputStyled {...props} />
                <ToggleBuuton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : 'Show'}
                </ToggleBuuton>
            </PasswordInputWrapper>
           <div>
                {showPassword ? props.value : ''}
            </div>
        </>
     
    );
}

export {PasswordInput};