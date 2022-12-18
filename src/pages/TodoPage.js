import { Todos } from '../components/Todos';
import { Header } from '../components/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 390px;
    height: 844px;
    border: 1px solid rgb(207, 207, 207);
`

export const TodoPage = () => {
    return (
        <Wrapper>
            <Header />
            <Todos />
        </Wrapper>
    )
}