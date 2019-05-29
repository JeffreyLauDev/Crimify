import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class AccountButton extends Component {


    logout = () => {
        localStorage.removeItem("token")
    }
    render() {
        if (localStorage.getItem('token') === null) {
            this.props.history.push('./login');
        }
        return (
            <div className="account-setting">

                {/* <Link to="login" onClick={this.logout}>   <i class="material-icons search-icons">search</i></Link> */}
                <Link to="login" onClick={this.logout} className="logout-button">   <i className="material-icons search-icons" style={{ width: 24 }}>lock_open</i></Link>
            </div>

        );
    }
}

export default AccountButton;
