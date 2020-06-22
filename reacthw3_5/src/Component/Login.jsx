import React, { Component } from 'react';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + mm + dd;
let tomorrow = parseInt(today) + 1;
let yesterday = parseInt(today) - 1;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { user: 'today', PIN: today },
                { user: 'tomorrow', PIN: String(tomorrow) },
                { user: 'yesterday', PIN: String(yesterday) },
            ],

            username: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }
        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        //Check the username and password, failed to use map function
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.username === this.state.data[i].user && this.state.password === this.state.data[i].PIN) {
                return this.setState({ error: 'Login Success' });
            }

            if (this.state.username === this.state.data[i].user && this.state.password !== this.state.data[i].PIN) {
                return this.setState({ error: 'Password Incorrect' });
            }
        }

        return this.setState({ error: 'UserName does not exist' });
    }

    handleUserChange(e) {
        this.setState({
            username: e.target.value,
        });
    };

    handlePassChange(e) {
        this.setState({
            password: e.target.value,
        });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 onClick={this.dismissError}>

                            {this.state.error}
                        </h3>
                    }
                    <label>User Name</label>
                    <input type="text" value={this.state.username} onChange={this.handleUserChange} />

                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.handlePassChange} />

                    <input type="submit" value="Log In" />
                </form>
            </div>
        );
    }
}

export default Login;