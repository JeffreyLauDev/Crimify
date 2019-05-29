import React, { Component } from 'react';



class SearchBar extends Component {
    state = {
        selectedOption: null,
        open: false
    }

    constructor(props) {
        super(props)
        this.state = {
            offences: [],
            isLoading: true,
            open: false
        }
    }

    openModal = () => {
        this.setState({
            open: true
        })
    }

    closeModal = () => {
        this.setState({
            open: false
        })
        this.props.cleanData()
    }

    render() {
        const { title, children, button } = this.props;

        if (!this.state.open) {
            return <div onClick={this.openModal}>{button}</div>
        }
        return (
            <div>
                <div onClick={this.openModal}>{button}</div>
                <div class={this.state.open === false ? "modal" : "modal d-block"} >


                    <div class="card modal-content" >
                        <span class="close" onClick={this.closeModal}>&times;</span>
                        <h5 className="card-header">
                            {title}
                        </h5>
                        <h5 className="CardContent">

                            {children}
                        </h5>

                    </div>
                    <div className="backgound" onClick={this.closeModal}>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
