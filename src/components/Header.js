import React from "react";
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    height: 50px;
    border: 1px solid blue;
`

export const Header = () => {
    return (
        <HeaderWrapper><i src="public\logo.PNG"></i></HeaderWrapper>
    );
};