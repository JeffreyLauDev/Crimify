import React, { Component } from 'react';
import SearchBar from './SearchBar'
import DataTable from './DataTable'
import ReactTable from "react-table";
import "react-table/react-table.css";
import BarChart from './BarChart'



class PanelControl extends Component {

    constructor(props) {
        super(props)
        this.state = {
            offences: [],
            isLoading: true,
            dataSearch: [],
            limit: 5
        }
    }


    componentDidMount() {
        const { search } = this.props
        if (search !== "") {
            this.dataSearch(search)
        }

    }
    logout = () => {
        localStorage.removeItem("token")
        this.props.history.push('./login');
    }
    render() {
        const { setSearch, search, dataSearch, area, age, gender, year } = this.props
        console.log(dataSearch)
        if (localStorage.getItem('token') === null) {
            this.props.history.push('./login');
        }

        return (
            <div>
                <div className="panel-header">

                    <div style={{ margin: 8, marginRight: 14 }}>
                        <SearchBar
                            area={area}
                            age={age}
                            gender={gender}
                            year={year}
                            setSearch={setSearch} />
                    </div>
                </div>
                <div className="panel-controller">

                    {search !== '' ? (
                        <DataTable
                            title={
                                <div>
                                    Top
                                    <input className="editable" value={this.state.limit} onChange={(e) => this.setState({ limit: e.target.value })} type="number" />
                                    {search.label} in Australia
                                </div>
                            }
                            control={<div>

                            </div>}
                        >
                            <BarChart
                                limit={this.state.limit}
                                data={dataSearch.map(data => {
                                    return { LGA: data.LGA, total: data.total }
                                }).sort((a, b) => { return b.total - a.total })}
                            />
                        </DataTable>

                    ) : null}

                    {search !== '' ? (
                        <DataTable
                            title={"Data About " + search.label}
                            data=''

                        >
                            <div className="data-table">
                                <ReactTable
                                    columns={[
                                        {
                                            Header: "LGA",
                                            accessor: "LGA"
                                        },
                                        {
                                            Header: 'Total',
                                            accessor: "total"
                                        }
                                    ]}

                                    data={dataSearch.filter((data) => { return parseInt(data.total) !== 0 }).map(data => {
                                        return { LGA: data.LGA, total: parseInt(data.total) }
                                    })} />
                            </div>
                        </DataTable>

                    ) : null}







                </div>

            </div>

        );
    }
}

export default PanelControl;
