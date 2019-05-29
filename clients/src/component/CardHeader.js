import React, { Component } from 'react';
class CardHeader extends Component {



    render() {
        const { children } = this.props
        return (
            <h5 className="card-header">
                {children}
            </h5>

        );
    }
}

export default CardHeader;
