import React from 'react';
import { Button, Form, FormGroup, Container, Row, Col, Input} from 'reactstrap';

class Login extends React.Component {

    login = event => {

        localStorage.setItem('username', 'username')
    }

    render() {
        return (
            <div className="login">

                <Container>
                    <Form onSubmit={this.login}>
                        <Col md={{size: 4, order: 1, offset: 4}}>
                            <FormGroup>
                                <Input type="username" name="username" placeholder="Username" />
                            </FormGroup>
                        </Col>
                        <Col md={{size: 4, order: 1, offset: 4}}>
                            <FormGroup>
                                <Input type="password" name="password" placehoder="Password" />
                            </FormGroup>
                        </Col>
                        <Col md={{size: 4, order: 1, offset: 4}}>
                            <Button color="secondary" name="login-submit">Login</Button>
                        </Col>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Login;