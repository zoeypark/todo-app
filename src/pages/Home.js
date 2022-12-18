import React, {useState} from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 390px;
    height: 844px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid rgb(207, 207, 207);
`

const HomeLogo = styled.img`
    width: 280px;
    margin-left: 52px;
`

export const Home = () => {
    const [clicked,  setClicked] = useState(true);

    const handleClick = (e) => {
        setClicked(!clicked);
        console.log(clicked);
    }

    return (
        <Link to={ clicked ? '/todopage' : ''}>
            <Wrapper onClick={handleClick}>
                <HomeLogo alt='logo__home' src='img\logo__home.PNG' />
            </Wrapper>
        </Link>
    )
}