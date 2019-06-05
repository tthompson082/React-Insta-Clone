import React from 'react';

class Login extends React.Component {

    login = event => {

        localStorage.setItem('username', 'username')
    }

    render() {
        return (
            <div className="login">

                <form onSubmit={this.login}>
                    <input type="text" name="username" placeholder="username" />

                    <input type="text" name="password" placeholder="password" />

                    <button name="login-submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;