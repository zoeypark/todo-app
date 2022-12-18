import React from "react";
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { IconContext } from "react-icons";


const HeaderWrapper = styled.div`
    height: 60px;
    /* border: 1px solid blue; */
    display: flex;
    justify-content: space-between;
`

const LogoImg = styled.img`
    margin: 5px;
`

const MenuIconWrapper = styled.div`
    justify-content: center;
    display: flex;
    padding-right: 1px;
    flex-direction: column;
`


export const Header = () => {
    return (
      <HeaderWrapper>
        <LogoImg alt="logo" src="img/logo.PNG"></LogoImg>
        <MenuIconWrapper>
          <IconContext.Provider value={{ color: "rgb(207, 207, 207)" }}>
            <div className="plusIconWrapper">
              <FiMenu size="25" />
            </div>
          </IconContext.Provider>
        </MenuIconWrapper>
      </HeaderWrapper>
    );
};