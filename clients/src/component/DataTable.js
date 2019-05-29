import React, { Component } from 'react';
import Card from './Card'
import CardHeader from './CardHeader'
import CardContent from './CardContent'


class DataTable extends Component {



    render() {
        const { children, title, control } = this.props
        return (
            <Card>
                <CardHeader>
                    {title}
                    {control}
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>

        );
    }
}

export default DataTable;
