import React, { Component } from 'react';
import {
    ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';


class BarChart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            offences: [],
            isLoading: true,
            dataSearch: []
        }
    }


    render() {
        const { limit, data } = this.props


        return (
            <ResponsiveContainer width="99%" height={limit * 45}>
                <ComposedChart
                    layout="vertical"
                    data={data.filter((i, index) => (index < limit))}
                    margin={{
                        left: -10, right: 5
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="LGA" type="category" />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey="total" barSize={20} fill="#003366" />
                </ComposedChart>

            </ResponsiveContainer>

        );
    }
}

export default BarChart;
