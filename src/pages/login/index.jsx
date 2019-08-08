import React from 'react';

export default class Login extends React.Component {
    handleLogin = () => {
        localStorage.setItem('token', 'xixi');
    }
    handleLogout = () => {
        localStorage.removeItem('token');
    }
    render() {
        return (
            <div>
                <p><button className="btn btn-primary" onClick={this.handleLogin}>登陆</button></p>
                <p><button className="btn btn-danger" onClick={this.handleLogout}>退出</button></p>
            </div>
        );
    }
}