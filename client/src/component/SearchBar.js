import React, { Component } from 'react';
import Select, { components } from 'react-select';
import axios from "axios";
import { SERVER_URL } from '../constants'
import Modal from '../component/Modal'
import SnackBar from '../component/SnackBar'


const selectStyle = {
    control: styles => ({ ...styles, boxShadow: "0 2px 4px rgba(0,0,0,0.2)", borderColor: 'transparent' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            padding: 12,
        };
    },
    input: styles => ({ ...styles, fontWeight: 500, paddingLeft: 9 }),
    placeholder: styles => ({ ...styles, fontWeight: 500, paddingLeft: 9, color: '#afafaf' }),
}

const DropdownIndicator = props => {
    return (

        components.DropdownIndicator && (
            <div className="d-inline">
                <components.DropdownIndicator {...props}>
                    <i className="material-icons search-icons">search</i>
                </components.DropdownIndicator>
            </div>
        )
    );
};
const monthList = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
]

class SearchBar extends Component {
    state = {
        selectedOption: null,
    }
    componentDidMount() {
        this.getOffences()
    }
    constructor(props) {
        super(props)
        this.state = {
            offences: [],
            selectedOption: null,
            isLoading: true,
            area: [],
            age: [],
            gender: [],
            year: [],
            month: []
        }
    }

    cleanFilter = () => {
        this.setState({
            area: [],
            age: [],
            gender: [],
            year: [],
            month: []
        })
    }
    getOffences = () => {
        return axios({
            method: 'get', //you can set what request you want to be
            url:
                SERVER_URL + '/offences',
            headers: {
                /*   'Content-Type': 'application/x-www-form-urlencoded' */
            },
        })
            .then(response => {

                if (response.status !== 200) {
                    SnackBar("something goes wrongwed")
                }
                else {
                    const convertedData = response.data.offences.map(item => {
                        return { value: item, label: item }
                    })

                    this.setState({
                        offences: convertedData
                    }, () => {
                        this.setState({
                            isLoading: false
                        })
                    })
                }

            })
            .catch(err => {
                SnackBar(err.response.data.message)
            });
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        const filter = { area: this.state.area, age: this.state.age, gender: this.state.gender, year: this.state.year, month: this.state.month }
        this.redirect(selectedOption, filter)

    }

    handleFilterChange = name => event => {
        this.setState({ [name]: event.map(result => result.value) });
    };

    redirect = (e, filter) => {
        this.props.setSearch(e, filter)
    }
    render() {
        const { selectedOption, offences } = this.state;

        return (
            <div>

                <Modal
                    cleanData={this.cleanFilter}
                    title="Advance Search"
                    button=
                    {<button className="filter-button  dropdown-toggle">
                        <i className="material-icons ">filter_list</i>
                    </button>
                    }>
                    <hr />
                    <div className="d-flex">
                        <div className="w-100">
                            <h4 className="card-header">Step 1: Please choose filters <span className="subtitle">(Optional, Mutiply)</span></h4>
                            <div className="d-flex mb-1">

                                <Select
                                    isMulti
                                    options={this.props.area}
                                    onChange={this.handleFilterChange("area")}
                                    placeholder="Please Choose areas"
                                    className="mb-1  col"
                                />

                                <Select
                                    onChange={this.handleFilterChange("age")}
                                    isMulti
                                    options={this.props.age}
                                    placeholder="Please Choose age"
                                    className="mb-1 pl-1 col"

                                />
                                <Select
                                    onChange={this.handleFilterChange("gender")}
                                    isMulti
                                    placeholder="Please Choose gender"
                                    className="mb-1  col"
                                    options={this.props.gender}
                                />

                                <Select
                                    onChange={this.handleFilterChange("year")}
                                    isMulti
                                    className="mb-1 pl-1 col"
                                    placeholder="Please Choose year"
                                    options={this.props.year}
                                />
                                <Select
                                    onChange={this.handleFilterChange("month")}
                                    isMulti
                                    className="mb-1  col"
                                    placeholder="Please Choose month"
                                    options={monthList}
                                />

                            </div>
                            <hr />
                            <h4 className="card-header">Step 2: Please choose Offence <span className="required subtitle">(Required *)</span></h4>
                            <Select
                                value={selectedOption}
                                components={{ DropdownIndicator }}
                                onChange={this.handleChange}
                                options={offences}
                                className="mb-1 "
                                placeholder="Please Choose a location"


                            />
                        </div>


                    </div>
                </Modal>
                <Select
                    value={selectedOption}
                    components={{ DropdownIndicator }}
                    onChange={this.handleChange}
                    options={offences}
                    placeholder="Please Choose a Offences"
                    styles={selectStyle}

                />

            </div>
        );
    }
}

export default SearchBar;
