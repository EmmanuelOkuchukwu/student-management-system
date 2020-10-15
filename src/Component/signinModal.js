import React from 'react';
import { Modal, Button } from "react-bootstrap";
import SimpleReactValidator from "simple-react-validator";
import { history } from './HistoryUtil';
import {withAlert} from "react-alert";
import signinCred from './MockData/signinCred'

class signinModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            email: '',
            password: ''
        }
        this.signin = this.signin.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onChange = this.onChange.bind(this);
        this.validator = new SimpleReactValidator();
    }
    handleShow() {
        this.setState({ show: true });
    }
    handleClose() {
        this.setState({ show: false });
    }
    componentDidMount() {
        if (!localStorage.getItem('access-token')) {
            console.log('token not found');
            history.push('/signin');
        } else {
            const accessToken = '123451995';
            if (localStorage.getItem('access-token') == accessToken) {
                console.log('access granted');
                history.push('/dashboard');
            } else {
                console.log('incorrect access token');
                history.push('/signin');
            }
        }
    }
    signin(evt) {
        evt.preventDefault();
        const { alert } = this.props;
        if(this.validator.allValid) {
            if ((this.state.emailInput == signinCred.email) && (this.state.passwordInput == signinCred.password)) {
                const token = '123451995';
                localStorage.setItem('access-token', token);
                history.push('/dashboard');
                alert.success('Successfully logged in, Champion!');
            } else {
                alert.error('Wrong creds, Loser!');
            }
            } else {
            this.validator.showMessages()
            this.forceUpdate()
        }
    }
    onChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        const { emailInput, passwordInput } = this.state
        return(
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Sign in
                </Button>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        <Modal.Title>Sign in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" name="emailInput" id="emails" value={emailInput} onChange={this.onChange} placeholder="Your Email" />
                        {this.validator.message('email', emailInput, 'required|email', { className: 'text-danger' })}<br/><br/>
                        <input type="password" name="passwordInput" id="passwords" value={passwordInput} onChange={this.onChange} placeholder="Your Password" />
                        {this.validator.message('password', passwordInput, 'required|password', { className: 'text-danger' })}<br/><br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>{' '}
                        <Button variant="primary" onClick={this.signin}>
                            Sign in
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default withAlert()(signinModal);
