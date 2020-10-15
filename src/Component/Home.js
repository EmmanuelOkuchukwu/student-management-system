import React from 'react';
import { SigninButton, BannerContainer, MainHeading, MainText, Text, ProfileContainer, AdminPanelContainer, SubHeading } from './Styles/signin';
import SigninModal from "./signinModal";
import HomeHeader from "./Layout/HomeHeader";
import Button from "react-bootstrap/Button"
import Footer from "./Layout/Footer";

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader/>
                <BannerContainer>
                    <MainText>
                        <MainHeading>Welcome to the Admin Dashboard!sxcf</MainHeading>
                        <Text>
                            Click the button below in order to log in and gain full access to the dashboard
                        </Text>
                        <SigninModal />
                    </MainText>
                </BannerContainer>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <ProfileContainer>
                            <SubHeading>View your Profile by clicking the button below</SubHeading>
                            <hr/>
                            <Text>You can access your Personal Profile account by clicking on the profile page button below. In the profile page you will be able to change your password and view your details such as your name and email address.</Text>
                            <Button variant="outline-dark">View you Profile</Button>
                        </ProfileContainer>
                    </div>
                    <div className="col-md-6">
                        <AdminPanelContainer>
                            <SubHeading>Have access to a full crud management system</SubHeading>
                            <hr/>
                            <Text>You can Manage all of the students that are in your class. You will be able to add a new student into the system and you will also be able to delete an old record of a past student as and you will be able to edit records that need to be updated.</Text>
                            <Button variant="outline-dark">Edit a user</Button>
                        </AdminPanelContainer>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Home;
