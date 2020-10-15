import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

const StyledTitle = styled.h1`
    font-size: 28px;
    color: #1BA1E2;
    text-align: left;
    padding: 15px;
`;

const CardStyled = styled(Card)`
    margin: 10px;
    text-align: left;
    width: 50%;
`;

const EditButton = styled(Button)`
    border-radius: 5px;
    height: 35px;
    margin: 0 10px;
`;

const DeleteButton = styled(Button)`
    height: 35px;
    margin: 0 10px;
`;

const AddButton = styled(Button)`
    border-radius: 5px;
    border: black solid 1px;
    position: absolute;
    top: 77px;
    left: 40%;
    width: 40px;
    height: 40px;
`;

export {
    StyledTitle,
    CardStyled,
    EditButton,
    DeleteButton,
    AddButton
}
