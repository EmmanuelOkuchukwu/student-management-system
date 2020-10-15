import React from 'react';
import { history } from "./HistoryUtil";
import Header from "./Layout/NavBar";
import { StyledTitle, CardStyled, EditButton, DeleteButton, AddButton } from "./Styles/styles";
// import users from "./MockData/users"
// import signinCred from "./MockData/signinCred";

class Dashboard extends React.Component {
    lastname;
    constructor(props) {
        super(props)
        this.state = {
            userDetails: [],
            isLoading: true,
        }
        this.addUsers = this.addUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    addUsers(e) {
        e.preventDefault();
        history.push('/addusers');
    }

    deleteUser(e, id) {
        fetch('http://localhost:3000/users/' + id, {
            method: 'DELETE',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.userDetails)
            .then(data => data.json())
            .then((data)=>{
                this.setState({userDetails: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    age: ''
                }});
            })
        });
    }

    componentDidMount() {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then((data) => {
            this.setState({userDetails: data, isLoading: false});
            console.log('data', data);
        })
            .catch(error => console.log(error));
        // this.setState({userDetails: users});
    }
    render() {
        let { userDetails, isLoading } = this.state;
        return (
            <div>
                <Header />
                <StyledTitle>Admin Panel</StyledTitle>
                <AddButton variant="outline-primary" onClick={this.addUsers}><i className="fas fa-plus"/></AddButton>
                {!isLoading ?
                    <div>
                        {userDetails?.map((userDetail, index) => {
                            return (
                                <CardStyled body key={index}>
                                    <div className="row">
                                        <p>{userDetail.firstname}</p>&nbsp;&nbsp;<p>{userDetail.lastname}</p>&nbsp;&nbsp;<p>{userDetail.email}</p>&nbsp;&nbsp;<p>{userDetail.age}</p>
                                        <EditButton variant="outline-primary"><i className="fas fa-edit" /></EditButton>
                                        <DeleteButton variant="outline-danger" onClick={this.deleteUser}><i className="fas fa-trash" /></DeleteButton>
                                    </div>
                                </CardStyled>
                            );
                        })}
                    </div> :
                    <div className="col-md-12">
                        <h3>Loading...</h3>
                    </div>
                }
            </div>
        );
    }
}

export default Dashboard;
