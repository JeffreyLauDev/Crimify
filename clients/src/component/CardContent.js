import React, { Component } from 'react';
class CardContent extends Component {



    render() {
        const { children } = this.props
        return (
            <h5 className="CardContent">
                {children}
            </h5>

        );
    }
}

export default CardContent;
