import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from '../constants'
import SnackBar from '../component/SnackBar'

import CardContent from '../component/CardContent'
class Login extends Component {


    login = (credentials) => {
        return axios({
            method: 'post', //you can set what request you want to be
            url:
                SERVER_URL + '/login',
            headers: {
                /*   'Content-Type': 'application/x-www-form-urlencoded' */
            },
            data: {
                email: credentials.email,
                password: credentials.password,
            }
        })
            .then(response => {

                if (response.status !== 200) {
                    SnackBar("something goes wrongwed")
                }
                else {
                    localStorage.setItem("token", response.data.token)
                    this.props.history.push('./panel')
                }

            })
            .catch(err => {
                SnackBar(err.response.data.message)
            });
    }

    submit = (e) => {
        e.preventDefault()
        const credentials = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        this.login(credentials)
    }


    render() {
        return (
            <div className="login-background">
                <section id="login">
                    <div className="card p-28">
                        <h1>QLD Crimify</h1>
                        <CardContent>
                            <form onSubmit={this.submit}>
                                <input type="email" placeholder="Email Address" name="email" autoComplete="email" required />
                                <input type="password" placeholder="Password" name="password" required />
                                <button type="submit">Login</button>
                                <p className="little">You haven't signed up yet? <Link to={'./register'}>Sign up now</Link></p>
                            </form>
                        </CardContent>

                    </div>
                </section>
            </div>


        );
    }
}

export default Login;
