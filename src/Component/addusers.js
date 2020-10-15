import React from 'react';
import SimpleReactValidator from "simple-react-validator";
import { history } from "./HistoryUtil";

class Addusers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            age: ""
        }
        this.add = this.add.bind(this);
        this.onChange = this.onChange.bind(this);
        this.validator = new SimpleReactValidator();
    }
    add(e) {
        e.preventDefault();
        const { alert } = this.props;
        const { firstname, lastname, email, age } =this.state;
        if(this.validator.allValid()) {
            fetch("http://localhost:3000/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "firstname": firstname,
                    "lastname": lastname,
                    "email": email,
                    "age": age
                })
            }).then(
                this.setState({
                    firstname: "",
                    lastname: "",
                    email: "",
                    age: ""
                })
            )
            .then((success)=> {
                alert.success('Well done, you Legend!');
                history.push('/dashboard');
            })
            .catch((error)=> {
                alert.error('WRONG, thats WRONG!!');
            })
        } else {
            this.validator.showMessages()
            this.forceUpdate()
        }
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return(
            <div>
                <h2>Add a user</h2>
                <input type="text" name="firstname" onChange={this.onChange} value={this.state.firstname}/>
                {this.validator.message('firstname', this.state.firstname, 'required|alpha', { className: "text-danger" })}<br/><br/>
                <input type="text" name="lastname" onChange={this.onChange} value={this.state.lastname}/>
                {this.validator.message('lastname', this.state.lastname, 'required|alpha', { className: "text-danger" })}<br/><br/>
                <input type="text" name="email" onChange={this.onChange} value={this.state.email}/>
                {this.validator.message('email', this.state.email, 'required|email', { className: "text-danger" })}<br/><br/>
                <input type="text" name="age" onChange={this.onChange} value={this.state.age}/>
                {this.validator.message("age", this.state.age, 'required|integer', { className: "text-danger" })}<br/><br/>
                <button onClick={this.add}>Add User</button>
            </div>
        );
    }
}
export default Addusers;