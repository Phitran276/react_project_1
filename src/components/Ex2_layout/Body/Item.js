import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-3">
                <div className="card text-white bg-primary border border-danger">
                    <img className="card-img-top" src="holder.js/100px180/" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>
        )
    }
}
