import React from 'react';
import { Button, Form, FormGroup, Container, Row, Col, Input} from 'reactstrap';

import './Login.scss'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ''
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = event => {
        const user = this.state.username;
        localStorage.setItem('username', user);
    }

    render() {
        return (
            <div className="login">
                <Container className="login-container">
                    <h1>Login</h1>
                    <Form onSubmit={this.login}>
                        <Col md={{size: 6, order: 1, offset: 3}}>
                            <FormGroup>
                                <Input 
                                    bsSize="lg"
                                    type="username" 
                                    name="username" 
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChanges}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={{size: 6, order: 1, offset: 3}}>
                            <FormGroup>
                                <Input
                                    bsSize="lg"
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                />
                            </FormGroup>
                        </Col>
                        <Col md={{size: 6, order: 1, offset: 3}}>
                            <Button size="lg" outline color="primary" name="login-submit" block>
                                Login
                            </Button>
                        </Col>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Login;