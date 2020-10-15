import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

const SigninButton = styled(Button)`
    background-color: #1BA1E2;
    color: #fff;
    border: 1px solid blue;
    margin: auto;
`;

const BannerContainer = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/home-page-banner.jpg");
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover; 
    position: relative;
`;

const MainHeading = styled.h1`
    font-size: 24px;
    color: #1BA1E2;
`;

const MainText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Text = styled.p`
    color: #fff;
    font-size: 16px;
`;

const ProfileContainer = styled.div`
    background-color: #1BA1E2;
    height: 300px;
`;

const AdminPanelContainer = styled.div`
    background-color: #1BA1E2;
    height: 300px;
`;

const SubHeading = styled.h2`
    color: #fff;
    font-size: 24px;
`;

const FooterStyled = styled.footer`
    padding: 15px;
    background-color: #1BA1E2;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export {
    SigninButton,
    BannerContainer,
    MainHeading,
    MainText,
    Text,
    ProfileContainer,
    AdminPanelContainer,
    SubHeading,
    FooterStyled
}
