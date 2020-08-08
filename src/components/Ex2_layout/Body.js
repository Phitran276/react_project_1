import React, { Component } from 'react';
import Banner from './Body/Banner';
import Item from './Body/Item';

export default class Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mb-4">
                        <Banner />
                </div>
                <div className="row">
                     <Item />
                     <Item />
                     <Item />
                     <Item />
                </div>
            </div>
        )
    }
}
