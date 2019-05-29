import React, { Component } from 'react';
import axios from "axios";
import { SERVER_URL } from '../constants'

import SnackBar from '../component/SnackBar'
import PanelControl from '../component/PanelControl'
import AccountButton from '../component/AccountButton'
import MapView from '../component/MapView'

class Register extends Component {


    constructor(props) {
        super(props)
        this.state = {
            search: '',
            isLoading: true,
            dataSearch: [],
            area: [],
            age: [],
            gender: [],
            year: []
        }
    }




    getArea = (datas) => {
        axios.get(SERVER_URL + "/areas").then(result => {

            this.setState({

                area: result.data.areas.map(area => { return { value: area, label: area } })
            })
        })
            .catch(err => {
                SnackBar("API has problem")
            })
    }
    getAges = (datas) => {
        axios.get(SERVER_URL + "/ages").then(result => {
            this.setState({
                age: result.data.ages.map(age => { return { value: age, label: age } })
            })
        })
            .catch(err => {
                SnackBar("API has problem")
            })
    }
    getGender = (datas) => {
        axios.get(SERVER_URL + "/genders").then(result => {

            this.setState({
                gender: result.data.genders.map(gender => { return { value: gender, label: gender } })
            })
        })
            .catch(err => {
                SnackBar("API has problem")
            })
    }
    getYear = (datas) => {
        axios.get(SERVER_URL + "/years").then(result => {

            this.setState({
                year: result.data.years.map(year => { return { value: year, label: year } })
            })
        })
            .catch(err => {
                SnackBar("API has problem")
            })
    }
    dataSearch = (e, filter) => {
        var area = filter.area.length === 0 ? '' : "area=" + filter.area + "&"
        var age = filter.age.length === 0 ? '' : "age=" + filter.age + "&"
        var gender = filter.gender.length === 0 ? '' : "gender=" + filter.gender + "&"
        var year = filter.year.length === 0 ? '' : "year=" + filter.year + "&"
        var month = filter.month.length === 0 ? '' : "month=" + filter.month + "&"
        var query = (("&" + area + age + gender + year + month).slice(0, -1))
        return axios({
            method: 'get', //you can set what request you want to be
            url:
                SERVER_URL + '/search?offence=' + e + query,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
        })
            .then(response => {

                if (response.status !== 200) {
                    SnackBar("something goes wrongwed")
                }
                else {

                    const filteredData = response.data.result.filter(item => {
                        return item.total !== 0
                    })
                    this.setState({
                        dataSearch: filteredData
                    })
                }

            })
            .catch(err => {
                SnackBar("API has problem")
            });
    }

    setSearch = (e, filter) => {

        this.setState({
            search: e
        }, () => {
            this.dataSearch(this.state.search.value, filter)
        })
    }
    componentDidMount() {
        this.getArea()
        this.getAges()
        this.getGender()
        this.getYear()
    }
    render() {

        if (localStorage.getItem('token') === null) {
            this.props.history.push('./login');
        }
        return (

            <div className="w100 h100">

                <PanelControl
                    setSearch={this.setSearch}
                    search={this.state.search}
                    dataSearch={this.state.dataSearch}
                    area={this.state.area}
                    age={this.state.age}
                    gender={this.state.gender}
                    year={this.state.year}

                />
                <MapView
                    search={this.state.search}
                    dataSearch={this.state.dataSearch.filter((data) => { return parseInt(data.total) !== 0 })}
                />

                <AccountButton />
            </div>

        );
    }
}

export default Register;
