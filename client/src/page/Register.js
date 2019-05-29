import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from '../constants'
import SnackBar from '../component/SnackBar'

import CardContent from '../component/CardContent'

class Register extends Component {

    register = (credentials) => {
        return axios({
            method: 'post', //you can set what request you want to be
            url:
                SERVER_URL + '/register',
            headers: {
                /*   'Content-Type': 'application/x-www-form-urlencoded' */
            },
            data: {
                email: credentials.email,
                password: credentials.password,
            }
        })
            .then(response => {
                if (response.status !== 201) {
                    SnackBar("something goes wrongwed")
                }
                else {
                    SnackBar(response.data.message)
                    this.props.history.push('./login');

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
        this.register(credentials)
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
                                <button type="submit">Register</button>
                                <p className="little">You have an account already? <Link to={'./login'}>Sign in now</Link></p>
                            </form>
                        </CardContent>

                    </div>
                </section>
            </div>

        );
    }
}

export default Register;
