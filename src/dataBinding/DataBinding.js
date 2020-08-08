import React, { Component } from 'react'

export default class DataBinding extends Component {
    name = 'Trần Ngọc Phi';

    student = {
        name: 'Song Lê',
        age: 20
    }


    render() {

        const school = 'cyberlearn';

        return (
            <div>
                <h1>React component class data binding</h1>
                <hr />
                <h1 id="title">hello {this.name} - school: {school}</h1>
            </div>
        )
    }
}
